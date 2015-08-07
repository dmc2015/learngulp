var gulp = require("gulp"),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass');


gulp.task('sass-2-ccs', function(){
	return gulp.src('source/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('jshint', function(){
	return gulp.src('source/javascript/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function(){
	gulp.watch('source/javascript/**/*.js', ['jshint']);
});

gulp.task('default', ['watch']);
