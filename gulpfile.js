var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-ruby-sass');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
    return gulp.src('components/js/*.js')
               .pipe(uglify()
                 .on('error', gutil.log))
               .pipe('browserify')
               .pipe(gulp.dest('builds/production/js'));
});

// Styles Task
// Builds Sass
gulp.task('styles', function(){
    return sass('components/scss/')
            .on('error', gutil.log)
        .pipe(gulp.dest('builds/production/css/'));
});
