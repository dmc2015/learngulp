//Requirements
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

//Defines Path to SaSS
var sassRoot = 'build/sass/';

//
// //Gulp Task
// gulp.task('sass-to-css', function(){
// 	return sass(sassRoot+'main.sass', {style: 'expanded'}), {sourcemap: 'true'})
// 	// .pipe(sass({souremap: true}))
// 	// .on('error', function(err){
// 	// 	console.error('Error!', err.message);
// 	// })
// 	// .pipe(sourcemaps.write())
// 	.pipe(gulp.dest('public/css'));
// });

//Gulp Task SASS
gulp.task('sass-to-css', function(){
	return sass(sassRoot, {style: 'expanded'}, {sourcemap: 'true'})
	.on('error', function (err) {
            console.error('Error!', err.message);
        })
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/css'));
});




// gulp.task('styles', function() {
// return sass('build/scss', { style: 'expanded' })
//     // .pipe(gulp.dest('scss'))
//     .pipe(gulp.dest(''))
// });

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


//
// Way #1
// gulp.task('sass-to-css', function(){
// 	return sass(sassRoot+'main.sass', {style: 'expanded'}, {sourcemap: 'true'})
// 	.pipe(sourcemaps.write())
// 	.pipe(gulp.dest('public/css'));
// });
