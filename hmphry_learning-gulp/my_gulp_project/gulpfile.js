//Requirements
var gulp = require('gulp'),
sass = requrie('gulp-ruby-sass');

//Defines Path to SaSS
var sassRoot = 'build/sass/';

//Gulp Task
gulp.task('sass-to-css', funciton(){
	return gulp.src(sassRoot+'main.scss')
	.pipe(sass({sourcemap: true}))
	.pipe(gulp.dest('public/css'));
});


