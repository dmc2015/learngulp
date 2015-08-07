var gulp = require("gulp"),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util');


gulp.task('sass-2-ccs', function(){
	return gulp.src('source/sass/**/*.sass')
		.pipe(sass())
    .pipe(sourcemaps())
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('jshint', function(){
	return gulp.src('source/javascript/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('concatjs', function(){
  return gulp.src('source/javascript/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js')
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('watch', function(){
	gulp.watch('source/javascript/**/*.js', ['jshint']);
  gulp.watch('source/sass/**/*.sass', ['sass-2-css']);
});

gulp.task('default', ['watch']);
