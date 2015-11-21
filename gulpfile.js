'use strict';
var gulp = require('gulp'),
	connect = require('gulp-connect');
	
gulp.task('serve', function () {
	connect.server({
		root: "build/",
		port: 8080
	})
});

gulp.task('default', ['serve']);
