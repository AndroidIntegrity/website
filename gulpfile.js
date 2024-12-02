const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('minify-css', () => {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('output.min.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('default', gulp.parallel('minify-css'));