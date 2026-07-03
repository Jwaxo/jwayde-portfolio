/**
 * @file app.js
 *
 * Javascript specific to the waxo_gray theme.
 */

jQuery('.field--field-images').slick();


// Make the toaster appear, and remove it when we've scrolled enough.
const toaster = jQuery('.toaster');
let toaster_min = getToasterMin();
if (toaster.length > 0) {
  toaster.addClass('visible');
}

// Make project rows visible once they are past 1/3 the way up the screen.
const project_rows = jQuery('.views-view--project-list .views-row');
project_rows.first().addClass('loaded');

if (project_rows.length > 0) {
  jQuery(window).on('resize scroll', () => {
    const distance = jQuery(window).scrollTop() + (jQuery(window).height() * 0.66);
    toaster_min = getToasterMin();
    toaster.toggleClass('finished', distance > toaster_min);
    project_rows.each((index, row) => {
      if (jQuery(row).offset().top < distance) {
        jQuery(row).addClass('loaded');
      }
    });
  });
}

function getToasterMin() {
  return jQuery(window).height() * 1;
}
