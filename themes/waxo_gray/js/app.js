/**
 * @file app.js
 *
 * Javascript specific to the waxo_gray theme.
 */

jQuery('.field--field-images').slick();

// Make project rows visible once they are past 1/3 the way up the screen.
const project_rows = jQuery('.views-view--project-list .views-row');

if (project_rows.length > 0) {
  jQuery(window).on('resize scroll', () => {
    project_rows.each((index, row) => {
      if (jQuery(row).offset().top < (jQuery(window).scrollTop() + (jQuery(window).height() * 0.66))) {
        jQuery(row).addClass('loaded');
      }
    });
  });
}
