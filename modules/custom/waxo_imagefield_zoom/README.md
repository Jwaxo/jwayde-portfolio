## Image Field Zoom

Image Field Zoom provides a field formatter that allows you to apply it to
your image field.

This is the Wayde version of the Drupal contrib module, with enough changes that
I decided not to patch it and just add it straight up to my repo. All of the
remaining documentation is the same, except where noted.

### Install

* Install module and enable like any other contrib module.

* Download the JQuery Zoom plugin from here:
https://github.com/jackmoore/zoom (latest version), unzip the file and
place the jquery.zoom.min.js file so that its path is:
/libraries/jquery_zoom/jquery.zoom.min.js


* Enable the module.

### Usage

* Add an image field to your content type/entity type.

* On the "Manage Display" setting page, select the ImageZoom field formatter.

* Click the gear on the right to configure how you want the Image zoom to work.
You can learn more about each option here: http://www.jacklmoore.com/zoom/

* You'll see the zoom in action when the images are rendered on the node/entity
pages.

### Plugin Information

General Information for the JQuery zoom plugin can be found here:

* Demo: http://www.jacklmoore.com/zoom/
* Github: https://github.com/jackmoore/zoom


### Maintainers

George Anderson (geoanders)
https://www.drupal.org/u/geoanders

Utsav Shah (utsavjshah)
https://www.drupal.org/u/utsavjshah
