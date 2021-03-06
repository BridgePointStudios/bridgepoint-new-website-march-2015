var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

// Scripts Task
// includes jQuery when piped through browserify
gulp.task('scripts', function(){
    return gulp.src('components/js/*.js')
               
               .pipe(gulp.dest('builds/development/js'))
               .pipe(connect.reload());
});

// Styles Task
// Builds CSS from SCSS
gulp.task('styles', function(){
    gulp.src('components/scss/*.scss')
        .pipe(compass({
            sass: 'components/scss',
            images: 'builds/development/images',
            style: 'expanded'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('builds/development/css'))
        .pipe(connect.reload());
});

// Reload when html changes
gulp.task('html', function(){
    gulp.src('builds/development/*.html')
        .pipe(connect.reload());
});

// Watch Task
// Watches SCSS and JS folders
gulp.task('watch', function() {
        gulp.watch('components/js/*.js', ['scripts']);
        gulp.watch('components/scss/*.scss', ['styles']);
        gulp.watch('builds/development/*.html', ['html']);
});


// Connect Task
// Live Reload
gulp.task('connect', function(){
    connect.server({
        root: 'builds/development/',
        livereload: true
    });
});

// Default task runner
gulp.task('default', ['styles', 'scripts', 'watch', 'connect']);
