//Requirements
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

//Defines Path to SaSS
var sassRoot = 'build/sass/';


//Gulp Task
gulp.task('sass-to-css', function(){
	return sass(sassRoot+'main.sass', {style: 'expanded'})
	.pipe(sass({souremap: 'true'}))
	.pipe(gulp.dest('public/css'));
});




gulp.task('styles', function() {
return sass('build/scss', { style: 'expanded' })
    // .pipe(gulp.dest('scss'))
    .pipe(gulp.dest(''))
});

//
//
// gulp.task('sass', function(){
// //	return gulp.src(sassRoot+'main.scss')
// 	return sass(sassRoot+'main.scss', {style: 'expanded'})
// 	.pipe(sass({sourcemap: true}))
// 	.pipe(gulp.dest('public/css'));
// });
//
//
