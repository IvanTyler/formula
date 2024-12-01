const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

gulp.task('sass-compile', () => {
    return gulp.src('./public/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css/'))
})

gulp.task('js-compile', () => {
    return gulp.src('./public/javaScript-compile/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/javaScript/'));
});

gulp.task('watch', () => {
    gulp.watch('./public/scss/**/*.scss', gulp.series('sass-compile'))
    gulp.watch('./public/javaScript-compile/**/*.js', gulp.series('js-compile'))
})