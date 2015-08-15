/// <reference path="../../typings/tsd.d.ts"/>

var gulp = require('gulp');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: true,
  target: 'ES3',
  module: 'commonjs',
});

gulp.task('typescript:build', () => {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts(tsProject));

  return merge([
    // 定義ファイル
    tsResult.dts
      .pipe(concat('lpr9201.d.ts')),
    // JavaScriptファイル
    tsResult.js
      .pipe(concat('lpr9201.js')),
  ].map((value, index, arr) => {
    return value.pipe(gulp.dest('lib'))
  }));
});

gulp.task('typescript:build:watch', ['typescript:build'], () => {
  gulp.watch('src/**/*.ts', ['typescript:build']);
});
