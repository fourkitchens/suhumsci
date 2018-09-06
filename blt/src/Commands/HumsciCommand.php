<?php

namespace Acquia\Blt\Custom\Commands;

use Acquia\Blt\Robo\Commands\Artifact\AcHooksCommand;
use Acquia\Blt\Robo\Exceptions\BltException;

/**
 * Defines commands in the "humsci" namespace.
 */
class HumsciCommand extends AcHooksCommand {

  /**
   * Run cron on all sites.
   *
   * @command drupal:cron
   */
  public function cron() {
    // Disable alias since we are targeting specific uri.
    $this->config->set('drush.alias', '');

    foreach ($this->getConfigValue('multisites') as $multisite) {
      try {
        $this->say("Running Cron on <comment>$multisite</comment>...");
        $this->switchSiteContext($multisite);

        $this->taskDrush()
          ->drush("cron")
          ->drush('cr')
          ->run();
      }
      catch (\Exception $e) {
        $this->say("Unable to run cron on <comment>$multisite</comment>");
      }
    }
  }

  /**
   * Synchronize local env from remote (remote --> local).
   *
   * Copies remote db to local db, re-imports config, and executes db updates
   * for each multisite.
   *
   * @command drupal:sync:default:site
   * @aliases ds drupal:sync drupal:sync:default sync sync:refresh
   * @executeInVm
   */
  public function sync($options = [
    'sync-files' => FALSE,
    'partial' => FALSE,
    'no-seven' => FALSE,
  ]) {

    $commands = $this->getConfigValue('sync.commands');
    if ($options['sync-files'] || $this->getConfigValue('sync.files')) {
      $commands[] = 'drupal:sync:files';
    }
    $this->invokeCommands($commands);

    if ($options['no-seven']) {
      $admin_info = $this->taskDrush()->drush('uinf')->options([
        'uid' => 1,
        'fields' => 'name',
        'format' => 'json',
      ])->run()->getMessage();
      $json = json_decode($admin_info, TRUE);
      $user_name = $json[1]['name'];

      return $this->taskDrush()
        ->drush('user:role:remove')
        ->arg('seven_admin_theme_user')
        ->arg($user_name)
        ->run();
    }
  }

  /**
   * @param $question
   * @param string $default
   * @param bool $required
   *
   * @return string
   */
  protected function askQuestion($question, $default = '', $required = FALSE) {
    if ($default) {
      $response = $this->askDefault($question, $default);
    }
    else {
      $response = $this->ask($question);
    }
    if ($required && !$response) {
      return $this->askQuestion($question, $default, $required);
    }
    return $response;
  }

  /**
   * @param string $multisite
   *
   * @return string
   */
  protected function getDatabaseName($multisite = 'default', $default = 'drupal') {
    $database_name = '';
    $count = 0;
    while (!preg_match("/^[a-z0-9_]+$/", $database_name)) {

      if (!$count) {
        $this->say('<info>Only lower case alphanumeric characters and underscores are allowed in the database name.</info>');
      }
      $question = "Database name for $multisite site?";
      if ($multisite == 'default') {
        $question = 'Database name?';
      }
      $database_name = $this->askDefault($question, $default);
      $count++;
    }
    return $database_name;
  }

  /**
   * Copies remote db to local db for default site.
   *
   * @param string $environment
   *   The environment as defined in project.yml or project.local.yml.
   *
   * @return object
   *   The Robo/Result object.
   *
   * @command drupal:sync:default:db
   *
   * @aliases dsb drupal:sync:db sync:db
   */
  public function syncDbDefault($environment = 'remote') {
    $local_alias = '@' . $this->getConfigValue('drush.aliases.local');
    $remote_alias = $this->getRemoteAlias($environment);

    $task = $this->taskDrush()
      ->alias('')
      ->drush('cache-clear drush')
      ->drush('sql-drop')
      ->drush('sql-sync')
      ->arg("@$remote_alias")
      ->arg($local_alias)
      // @see https://github.com/drush-ops/drush/releases/tag/9.2.1
      // @see https://github.com/acquia/blt/issues/2641
      ->option('--source-dump', sys_get_temp_dir() . '/tmp.sql')
      ->option('structure-tables-key', 'lightweight')
      ->option('create-db');

    if ($this->getConfigValue('drush.sanitize')) {
      $task->drush('sql-sanitize');
    }

    $task->drush('cr');
    $task->drush('sqlq "TRUNCATE cache_entity"');

    $result = $task->run();

    return $result;
  }

  /**
   * Overrides blt sync files command.
   *
   * @param string $environment
   *   The environment as defined in project.yml or project.local.yml.
   *
   * @return object
   *   The Robo/Result object.
   *
   * @command sync:files
   * @description Copies remote files to local machine.
   */
  public function syncFiles($environment = 'remote') {
    $remote_alias = $this->getRemoteAlias($environment);
    $site_dir = $this->getConfigValue('site');

    $task = $this->taskDrush()
      ->alias('')
      ->uri('')
      ->drush('rsync')
      ->arg("@$remote_alias" . ':%files/')
      ->arg($this->getConfigValue('docroot') . "/sites/$site_dir/files")
      ->option('exclude-paths', implode(':', $this->getConfigValue('sync.exclude-paths')));

    $result = $task->run();

    return $result;
  }

  /**
   * Get the remote alias.
   *
   * @param string $environment
   *   Environment name defined in project.yml or project.local.yml.
   *
   * @return string
   *   Drush alias name.
   */
  protected function getRemoteAlias($environment = 'remote') {

    // For ODE environments, just get the remote and replace with the ode name.
    if (strpos($environment, 'ode') !== FALSE) {
      $alias = $this->getConfigValue('drush.aliases.remote');
      return str_replace('.test', ".$environment", $alias);
    }

    return $this->getConfigValue("drush.aliases.$environment");
  }

  /**
   * Execute updates on a specific site.
   *
   * @param string $multisite
   *
   * @throws \Acquia\Blt\Robo\Exceptions\BltException
   */
  protected function updateSite($multisite) {
    $this->say("Deploying updates to <comment>$multisite</comment>...");
    $this->switchSiteContext($multisite);

    $this->invokeCommand('drupal:toggle:modules');
    $this->taskDrush()
      ->drush("updb -y")
      ->run();
    $this->taskDrush()
      ->drush("cr")
      ->run();
    $this->say("Finished deploying updates to $multisite.");
  }

}
