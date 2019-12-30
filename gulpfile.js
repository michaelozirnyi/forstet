var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('watch', function () {
  gulp
    .src('./source/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/styles/css'));

  gulp.watch('./source/styles/sass/**/*.scss', ['watch']);
});

gulp.task('default', function (callback) {
  gulp.src('source/**/*.*').pipe(gulp.dest('dist'))
});
