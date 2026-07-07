/**
 * @file app.js
 *
 * Javascript specific to the waxo_gray theme.
 */

jQuery('.field--field-images').slick();

// Make the toaster appear, and remove it when we've scrolled enough.
const home_toaster = jQuery('.toaster--home');
let home_toaster_min = getToasterMin(jQuery(window));
if (home_toaster.length > 0) {
  home_toaster.addClass('visible');
}

jQuery(window).on('resize scroll', () => {
});

const screen_toaster = jQuery('.toaster--screen');
const container = screen_toaster.parent().parent();
let screen_toaster_min = getToasterMin(container, .5);
if (screen_toaster.length > 0) {
  screen_toaster.addClass('visible');
}
screen_toaster.on('hover', () => {
  screen_toaster.hide();
})

// Make project rows visible once they are past 1/3 the way up the screen.
const project_rows = jQuery('.views-view--project-list .views-row');
project_rows.first().addClass('loaded');

if (project_rows.length > 0) {
  jQuery(window).on('resize scroll', () => {
    home_toaster.toggleClass('finished', getScrollDistance(jQuery(window)) > getToasterMin(jQuery(window)));
    project_rows.each((index, row) => {
      if (jQuery(row).offset().top < distance) {
        jQuery(row).addClass('loaded');
      }
    });
  });
}

function getToasterMin(parent, modifier = 1) {
  return parent.height() * modifier;
}

function getScrollDistance(parent) {
    return parent.scrollTop() + (parent.height() * 0.66);
}
