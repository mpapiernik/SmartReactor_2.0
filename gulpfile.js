'use strict';

var requireDir = require('require-dir');

requireDir('./build', {recurse: true});


var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});