const { watch, parallel, series, dest, src } = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');

const sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function taskSass(cb) {
  console.log('Rendering SCSS...');
  const returned = src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer(),
    ]))
    .pipe(dest('./css'));
  console.log('Render complete!');
  return returned;
}

function taskWatch(cb) {
  watch('scss/*.scss', taskSass);
  cb();
}

exports.default = series(taskSass);
exports.build = series(taskSass);
exports.dev = parallel(taskWatch, series(taskSass));
