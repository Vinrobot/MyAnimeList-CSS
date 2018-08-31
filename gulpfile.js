'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');


const AUTOPREFIXER_BROWSERS = [
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

// Gulp task to minify SASS files
gulp.task('styles', function() {
	return gulp.src('./**/main.scss')

	// Compile SASS files
	.pipe(sass({
		outputStyle: 'nested',
		precision: 10,
		includePaths: ['.'],
		onError: console.error.bind(console, 'SASS error:')
	}))

	// Auto-prefix css styles for cross browser compatibility
	.pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))

	// Minify the file
	.pipe(csso())

	// Output
	.pipe(gulp.dest('./dist'))
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function() {
	runSequence('styles');
});