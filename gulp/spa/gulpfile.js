const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

gulp.task('default', ['transformaCss','transformJs'], () => {
    console.log('Feito!!!')
})

gulp.task('transformaCss', () => {
    gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments" : true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('src/assets/css'))
})

gulp.task('transformJs', () => {
    console.log('JS')
})