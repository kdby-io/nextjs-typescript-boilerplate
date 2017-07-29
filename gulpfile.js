const gulp = require('gulp');

gulp.task('default', () => {
  return gulp.src([
    'src/**/*.json',
    'next.config.js',
  ])
  .pipe(gulp.dest('dist'));
});