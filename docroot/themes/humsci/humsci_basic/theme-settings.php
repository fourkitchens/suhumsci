<?php

/**
 * @file
 * Provides an additional config form for theme settings.
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\Core\Render\Markup;

// Set theme name to use in the key values.
$theme_name = \Drupal::theme()->getActiveTheme()->getName();

/**
 * Implements hook_form_system_theme_settings_alter().
 *
 * Form override for theme settings.
 */
function humsci_basic_form_system_theme_settings_alter(array &$form, FormStateInterface $form_state) {
  $form['options_settings'] = [
    '#type' => 'fieldset',
    '#title' => t('Theme Specific Settings'),
  ];

  // Brandbar
  $form['options_settings']['humsci_basic_brand_bar'] = [
    '#type' => 'fieldset',
    '#title' => t('Brand Bar Settings'),
  ];

  $form['options_settings']['humsci_basic_brand_bar']['brand_bar_variant_classname'] = [
    '#type' => 'select',
    '#title' => t('Brand Bar Variant'),
    '#options' => [
      'default' => '- Default -',
      'bright' => t('Bright'),
      'dark' => t('Dark'),
      'white' => t('White'),
    ],
    '#default_value' => theme_get_setting('brand_bar_variant_classname'),
  ];

  // Lockup
  $img = '<img src="' . base_path() . drupal_get_path('theme', 'humsci_basic') . '/lockup-example.png" />';
  $rendered_image = render($img);
  $image_markup = Markup::create($rendered_image);
  $decanter = Link::fromTextAndUrl('Decanter Lockup Component', Url::fromUri('https://decanter.stanford.edu/component/identity-lockup/'))->toString();

  $form['options_settings']['humsci_basic_lockup'] = [
    '#type' => 'fieldset',
    '#title' => t('Lockup Settings'),
    '#field_prefix' => "<p>$image_markup</p><p>More examples can be found at: $decanter</p>",
  ];

  $form['options_settings']['humsci_basic_lockup']['lockup']['#tree'] = TRUE;

  $form['options_settings']['humsci_basic_lockup']['lockup']['option'] = [
    '#type' => 'select',
    '#title' => t('Lockup Options'),
    '#options' => [
      'default' => '- Default -',
      'a' => t('Option A'),
      'b' => t('Option B'),
      'c' => t('Option C'),
      'd' => t('Option D'),
      'e' => t('Option E'),
      'f' => t('Option F'),
      'g' => t('Option G'),
      'h' => t('Option H'),
      'i' => t('Option I'),
      'j' => t('Option J'),
      'k' => t('Option K'),
      'l' => t('Option L'),
      'm' => t('Option M'),
      'n' => t('Option N'),
      'o' => t('Option O'),
      'p' => t('Option P'),
      'q' => t('Option Q'),
      'r' => t('Option R'),
      's' => t('Option S'),
      't' => t('Option T'),
    ],
    '#default_value' => theme_get_setting('lockup.option'),
    '#description' => t("Layout options."),
  ];

  $form['options_settings']['humsci_basic_lockup']['lockup']['line1'] = [
    '#type' => 'textfield',
    '#title' => t('Line 1'),
    '#default_value' => theme_get_setting('lockup.line1'),
    '#description' => t("Site title line."),
  ];

  $form['options_settings']['humsci_basic_lockup']['lockup']['line2'] = [
    '#type' => 'textfield',
    '#title' => t('Line 2'),
    '#default_value' => theme_get_setting('lockup.line2'),
    '#description' => t("Secondary title line."),
  ];

  $form['options_settings']['humsci_basic_lockup']['lockup']['line3'] = [
    '#type' => 'textfield',
    '#title' => t('Line 3'),
    '#default_value' => theme_get_setting('lockup.line3'),
    '#description' => t("Tertiary title line."),
  ];

  $form['options_settings']['humsci_basic_lockup']['lockup']['line4'] = [
    '#type' => 'textfield',
    '#title' => t('Line 4'),
    '#default_value' => theme_get_setting('lockup.line4'),
    '#description' => t("Organization name."),
  ];

  $form['options_settings']['humsci_basic_lockup']['lockup']['line5'] = [
    '#type' => 'textfield',
    '#title' => t('Line 5'),
    '#default_value' => theme_get_setting('lockup.line5'),
    '#description' => t("Last line full width option."),
  ];

}
