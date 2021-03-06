What is Gulp & Why Should You Care?

Gulp is a task runner, a task runner is a program or framework that automates tedious tasks
that may take a human significantly more time to perform. These changes are usually related to the following:


Other Tidbits About Gulp

-Gulp is code over configuration, allowing for customization.

-Gulp is a build framework, a framework that helps get a project ready for a production environment. A build framework may not be able to get the entire project ready for production, enter build systems.

-A build system, basically the same process of getting code ready to be deployed but could incorporate more frameworks then just gulp. A serious of frameworks or processes used to get a project ready for deployment.

There are plenty of tutorials available online and there is no reason for me to add them unless I find something different or better to contributue. Instead I have a repo that goes through these tutorials and links to these tutorials are below. If you have any questions please feel free to reference my <a href="">repo</a> and ask me any questions.

Gulp only has 5 methods:
task
  gulp.task(nameOftheTask, [subTask, subTask, subTask], function(){

    });

  gulp.task(nameOftheTask, function(){

    });

    the first argument is the name of the given task, the array of arguments is a group of tasks that this task will run when executed and the function contains
    anything specifically you would want done with the task that was named.


src
  gulp.src

  gulp.task('scripts', function(){
    return gulp.src('js/*.js')
      .pipe(concat('all.js'))
    });

    a return is used at the beginning of the task followed by the gulp.src.
    gulp.src defines the files that we would like to use in a task, after the method that sources the files to be modified pipes are usually utilized to do additional methods
    to these files.


dest
  gulp.dest

  Assigns the location where the output of the task should be placed. The below example will run from the command line with
  'gulp scripts'
  The gulp.src will go to the directory 'js' and all the files with the extension in this folder of '.js'.
  Concat will concatenate all of these files into 'all.js'
  Then move the file to the folder 'dist'

  gulp.task('scripts', function(){
    return gulp.src('js/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist'))
    });


watch
  gulp.watch

gulp.watch('js/*.js', [lint, scripts, concat]);
gulp.watch('sass/*.sass', [sass-to-css]);

The watch function watches the specified directory in its first argument and then it executes the tasks in the second argument (array) when the files of the first
argument change.

Additional modifications can be made to this format like setting up a call back:

gulp.watch('js/**/*.js', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

Another pattern sets up the gulp watch as a variable and is capable of adding other events to it:

var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});


See the documentation for additional information:
https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb



A List of All Gulp Plugins

http://gulpjs.com/plugins/

Tutorials.md

http://hmphry.com/gulp/

You will get an error similar to
"TypeError: Arguments to path.join must be strings
    at Object.posix.join (path.js:488:13)..."


If you Google it will say something along the lines of
Paraphrase:
"gulp.src(...) no longer being valid and that it changed to replaced with gulp-ruby-sass."

Reference: http://stackoverflow.com/questions/28140012/gulp-typeerror-arguments-to-path-join-must-be-strings

In this particular tutorial the issue is related to sourcemaps, look up the docs for sourcemaps to learn more but this syntax will work:

//Requirements
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

//Defines Path to SaSS
var sassRoot = 'build/sass/';

//Gulp Task SASS
gulp.task('sass-to-css', function(){
	return sass(sassRoot+'main.sass', {style: 'expanded'}, {sourcemap: 'true'})
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/css'));
});


If you want to use sourcemaps directly via a pipe,

".pipe(sourcemaps.write())"

You will need to require it prior
"var sourcemaps = require('gulp-sourcemaps');"

Otherwise you don't need to require it.




https://travismaynard.com/writing/getting-started-with-gulp

Good tutorial but no samples to concat, expand, etc.

https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js
http://leveluptuts.com/tutorials/learning-gulp/1-installing-introducing-gulp

http://code.tutsplus.com/tutorials/managing-your-build-tasks-with-gulpjs--net-36910
http://www.sitepoint.com/introduction-gulp-js/
