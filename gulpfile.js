var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass')

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
    return gulp.src('components/js/*.js')
               .pipe(browserify())
               .pipe(gulp.dest('builds/development/js'));
});

// Styles Task
// Builds Sass
gulp.task('styles', function(){
    gulp.src('components/scss/style.scss')
        .pipe(compass({
            sass: 'components/scss',
            images: 'builds/development/images',
            style: 'expanded'
        }))
        .pipe(gulp.dest('builds/development/css'));
});

gulp.task('watch', function() {
        gulp.watch('components/js/*.js', ['scripts']);
        gulp.watch('components/scss/*.scss', ['styles'])
});

gulp.task('default', ['styles', 'scripts', 'watch']);
