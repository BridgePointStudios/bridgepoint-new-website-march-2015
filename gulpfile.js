var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
    return gulp.src('components/js/*.js')
               .pipe(uglify()
                 .on('error', gutil.log))
               .pipe(gulp.dest('builds/production/js'));
});
