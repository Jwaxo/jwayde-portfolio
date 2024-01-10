# Jeff Wayde Portfolio Site

If you're reading this, you're either looking to see how I threw together my fun
little personal website, or you're me, trying to figure out how to get it
working again. Either way, thanks for checking the Readme! I'm a strong believer
in documentation, especially when I'm not the one writing it.

## Installation

This site, when it's not hosted on a live server, is expected to run using [Lando](https://docs.lando.dev/),
with its styles generated and compiled via Gulp. These should both be very easy
and straightforward to get set up on your own machine.

While you shouldn't need to install anything other than NPM to get the theme
running, you will need Lando installed locally.

1. Clone this code locally: `git clone git@github.com:Jwaxo/jwayde-portfolio.git`
1. Go into the root folder of the repo: `cd jwayde-portfolio`
1. Start the server: `lando start`
1. Create a `settings.local.php` file in /sites/default, then paste the following
into it:
```
<?php

$databases['default']['default'] = array (
  'database' => 'drupal10',
  'username' => 'drupal10',
  'password' => 'drupal10',
  'prefix' => '',
  'host' => 'database',
  'port' => '',
  'isolation_level' => 'READ COMMITTED',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'driver' => 'mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);

$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
$settings['cache']['bins']['page'] = 'cache.backend.null';
$settings['cache']['bins']['render'] = 'cache.backend.null';
$config['system.logging']['error_level'] = 'verbose';
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;
```
1. If you have a database (I'm forced to manually grab one from PHPMyAdmin), get
it installed: `lando db-import [database service]`
1. Go to jwayde-portfolio.lndo.site to see (hopefully) the site!

## Theming

Theming uses SCSS and compiles using Gulp, and is all contained in waxo_gray, a
theme I created on Drupal 8 when my last name was still Wax.

1. Navigate to the theme: `cd themes/waxo_gray`
1. Install everything necessary: `npm install`
1. Start up gulp! `gulp dev`

That should do you, honestly. The theme has its own Readme for extra info.
