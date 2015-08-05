//Requirements
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

//Defines Path to SaSS
var sassRoot = 'build/sass/';

//Gulp Task
gulp.task('sass', function(){
//	return gulp.src(sassRoot+'main.scss')
	return sass(sassRoot+'main.scss', {style: 'expanded'})
	.pipe(sass({sourcemap: true}))
	.pipe(gulp.dest('public/css'));
});


