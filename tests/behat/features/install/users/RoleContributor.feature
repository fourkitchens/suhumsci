@install
Feature: Install State
  In order to verify a user has correct permission
  Permissions should be set for each role correctly.

  @api @safe
  Scenario: Test default permissions.
    Given I run drush "cget user.role.contributor permissions"
    Then the role "contributor" should have 96 permissions
    And drush output should contain "access administration pages"
    And drush output should contain "access content overview"
    And drush output should contain "access contextual links"
    And drush output should contain "access entity usage statistics"
    And drush output should contain "access file_browser entity browser pages"
    And drush output should contain "access image_browser entity browser pages"
    And drush output should contain "access media overview"
    And drush output should contain "access media_browser entity browser pages"
    And drush output should contain "access toolbar"
    And drush output should contain "access video_browser entity browser pages"
    And drush output should contain "administer block settings for theme su_humsci_theme"
    And drush output should contain "administer blocks provided by block_content"
    And drush output should contain "administer main menu items"
    And drush output should contain "create event_collections entities"
    And drush output should contain "create field_hs_hero_overlay_color"
    And drush output should contain "create field_paragraph_style"
    And drush output should contain "create file media"
    And drush output should contain "create hs_basic_block block content"
    And drush output should contain "create hs_basic_page content"
    And drush output should contain "create hs_course content"
    And drush output should contain "create hs_event content"
    And drush output should contain "create hs_event_series content"
    And drush output should contain "create hs_news content"
    And drush output should contain "create hs_person content"
    And drush output should contain "create hs_publications content"
    And drush output should contain "create hs_research content"
    And drush output should contain "create image media"
    And drush output should contain "create media"
    And drush output should contain "create publications_collections entities"
    And drush output should contain "create video media"
    And drush output should contain "delete any course_collections entities"
    And drush output should contain "delete any event_collections entities"
    And drush output should contain "delete any publications_collections entities"
    And drush output should contain "delete own course_collections entities"
    And drush output should contain "dropzone upload files"
    And drush output should contain "edit any course_collections entities"
    And drush output should contain "edit any event_collections entities"
    And drush output should contain "edit any hs_basic_page content"
    And drush output should contain "edit any hs_course content"
    And drush output should contain "edit any hs_event content"
    And drush output should contain "edit any hs_event_series content"
    And drush output should contain "edit any hs_news content"
    And drush output should contain "edit any hs_person content"
    And drush output should contain "edit any hs_publications content"
    And drush output should contain "edit any hs_research content"
    And drush output should contain "edit any publications_collections entities"
    And drush output should contain "edit field_hs_hero_overlay_color"
    And drush output should contain "edit field_paragraph_style"
    And drush output should contain "edit own course_collections entities"
    And drush output should contain "edit own field_hs_hero_overlay_color"
    And drush output should contain "edit own field_paragraph_style"
    And drush output should contain "edit own file media"
    And drush output should contain "edit own hs_basic_page content"
    And drush output should contain "edit own hs_course content"
    And drush output should contain "edit own hs_event content"
    And drush output should contain "edit own hs_event_series content"
    And drush output should contain "edit own hs_person content"
    And drush output should contain "edit own hs_publications content"
    And drush output should contain "edit own hs_research content"
    And drush output should contain "edit own image media"
    And drush output should contain "edit own video media"
    And drush output should contain "notify of path changes"
    And drush output should contain "publish editable content"
    And drush output should contain "rabbit hole bypass node"
    And drush output should contain "revert hs_basic_page revisions"
    And drush output should contain "revert hs_course revisions"
    And drush output should contain "revert hs_event revisions"
    And drush output should contain "revert hs_event_series revisions"
    And drush output should contain "revert hs_news revisions"
    And drush output should contain "revert hs_person revisions"
    And drush output should contain "revert hs_publications revisions"
    And drush output should contain "revert hs_research revisions"
    And drush output should contain "unpublish editable content"
    And drush output should contain "update any hs_basic_block block content"
    And drush output should contain "use text format basic_html"
    And drush output should contain "use text format minimal_html"
    And drush output should contain "view any course_collections entities"
    And drush output should contain "view any event_collections entities"
    And drush output should contain "view any publications_collections entities"
    And drush output should contain "view field_paragraph_style"
    And drush output should contain "view hs_basic_page revisions"
    And drush output should contain "view hs_course revisions"
    And drush output should contain "view hs_event revisions"
    And drush output should contain "view hs_event_series revisions"
    And drush output should contain "view hs_news revisions"
    And drush output should contain "view hs_person revisions"
    And drush output should contain "view hs_publications revisions"
    And drush output should contain "view hs_research revisions"
    And drush output should contain "view own field_paragraph_style"
    And drush output should contain "view own unpublished content"
    And drush output should contain "view the administration theme"
