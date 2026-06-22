const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');

const sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function taskSass(cb) {
  console.log('Rendering SCSS...');
  const returned = gulp.src('scss/app.scss')
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
      .on('error', sass.logError)
    )
    .pipe($.postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest('./css'));
  console.log('Render complete!');
  return returned;
}

function taskWatch(cb) {
  gulp.watch('scss/*.scss', taskSass);
  cb();
}

exports.default = gulp.series(taskSass);
exports.build = gulp.series(taskSass);
exports.dev = gulp.parallel(taskWatch, gulp.series(taskSass));
