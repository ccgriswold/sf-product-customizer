/* npm install --save-dev gulp gulp-htmlmin gulp-sass gulp-browser gulp-babel pump gulp-uglify */
/* jshint esnext: true, browser: true */

const gulp         = require('gulp'),
      htmlmin      = require('gulp-htmlmin'),
      sass         = require('gulp-sass'),
      gulpBrowser  = require("gulp-browser"),
      babel        = require('gulp-babel'),
      pump         = require('pump'),
      uglify       = require('gulp-uglify');


gulp.task('html', function () {
    return gulp.src('./index.html')
    // .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('../public/'));
});


gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('../public/css/'));
});


gulp.task('js', function (e) {
    pump([
        gulp.src('./js/main.js'),
        gulpBrowser.browserify(),
        babel({ presets: ['es2015'] }),
        // uglify(),
        gulp.dest('../public/js/')
    ], e);
});


gulp.task('img', function () {
    return gulp.src('./Assets/*')
    .pipe(gulp.dest('../public/Assets/'));
});


// ====================================================
// run 'default' gulp cmd to perform an array of tasks!
// ====================================================

gulp.task('default', [ 'html', 'sass', 'js', 'img' ]);

gulp.task('watch', function () {
    gulp.watch('./*html', ['html']);
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./scss/*/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['js']);
});

// call exclusively to compile scss without full build
gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./scss/*/*.scss', ['sass']);
});
