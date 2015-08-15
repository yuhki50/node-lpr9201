/// <reference path="../../typings/tsd.d.ts"/>

var gulp = require('gulp');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: true
});

gulp.task('typescript:build', () => {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts(tsProject));

  return merge([
    tsResult.dts.pipe(concat('lpr9201.d.ts')),  // 定義ファイル
    tsResult.js.pipe(concat('lpr9201.js')),  // JavaScriptファイル
  ].map((value, index, arr) => {
    return value.pipe(gulp.dest('lib'))
  }));
});

gulp.task('typescript:build:watch', ['typescript:compile'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

