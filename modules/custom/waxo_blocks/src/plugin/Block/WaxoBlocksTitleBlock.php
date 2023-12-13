<?php

namespace Drupal\workrise_block_layout\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Block\BlockPluginInterface;

/**
 * Provides a 'WaxoBlocksTitleBlock' block.
 *
 * @Block(
 *  id = "waxo_blocks_title_block",
 *  admin_label = @Translation("Waxo Blocks Title Block"),
 * )
 */
class WaxoBlocksTitleBlock extends BlockBase implements BlockPluginInterface {

  protected $allowed_tags = [
    'h2' => 'H2',
    'h3' => 'H3',
    'h4' => 'H4',
    'h5' => 'H5',
    'h6' => 'H6',
  ];

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    // Update some of the default configurations to match WorkRise's design.
    return [
      'title' => '',
      'subnav' => FALSE,
      'tag' => 'h6',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {

    $form = parent::blockForm($form, $form_state);

    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Displayed Title'),
      '#description' => $this->t('The formatted title to appear in the block.'),
      '#default_value' => $this->configuration['title'] ? $this->configuration['title'] : '',
      '#required' => TRUE,
    ];

    $form['subnav'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Add to Subnavigation?'),
      '#description' => $this->t('Adds this heading to the subnavigation menu, if this page has a Subnavigation block. When a user clicks the subnavigation menu link, their browser will automatically link to this location.'),
      '#default_value' => $this->configuration['subnav'] ? $this->configuration['subnav'] : '',
    ];

    $form['tag'] = [
      '#type' => 'select',
      '#options' => $this->allowed_tags,
      '#required' => TRUE,
      '#title' => $this->t('HTML Tag'),
      '#description' => $this->t('The style of tag to use with this title.'),
      '#default_value' => $this->configuration['tag'] ? $this->configuration['tag'] : 'h6',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
    $this->configuration['title'] = $form_state->getValue('title');
    $this->configuration['subnav'] = $form_state->getValue('subnav');
    $this->configuration['tag'] = $form_state->getValue('tag');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $vars = [
      '#theme' => 'waxo_blocks_title_block',
      '#title' => $this->configuration['title'],
      '#classes' => [
        $this->configuration['subnav'] ? 'waxo_blocks-subnav__anchor' : NULL,
      ],
      '#tag' => $this->configuration['tag'],
    ];
    return [
      'waxo_blocks_title_block' => $vars,
    ];
  }

}
