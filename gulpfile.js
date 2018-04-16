'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./sass/main.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(plumber.stop())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch(('./sass/**/*.sass'), ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
});


gulp.task('build', ['sass']);
gulp.task('default', ['serve', 'watch']);
