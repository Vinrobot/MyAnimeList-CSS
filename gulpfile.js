'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var runSequence = require('gulp4-run-sequence');
var sass = require('gulp-sass');


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
	.pipe(autoprefixer())

	// Minify the file
	.pipe(csso())

	// Output
	.pipe(gulp.dest('./dist'))
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', gulp.series('clean', function(done) {
	runSequence([ 'styles', done ]);
}));
