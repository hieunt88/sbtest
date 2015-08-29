<?php
/**
 * @file
 * sb_feature.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function sb_feature_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'sb_context';
  $context->description = 'Sb context for testing purposes';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'sbform' => 'sbform',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'sbform-sbform_block' => array(
          'module' => 'sbform',
          'delta' => 'sbform_block',
          'region' => 'content',
          'weight' => '10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Sb context for testing purposes');
  $export['sb_context'] = $context;

  return $export;
}
