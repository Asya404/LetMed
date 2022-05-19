// Подключаем модули
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const cssFiles = [
    './sass/main.scss',
    './owlcarousel/owl.carousel.min.css',
    './owlcarousel/owl.theme.default.min.css'
]

async function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            level: 2
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css'));
}

gulp.task('styles', styles);

gulp.task('sass:watch', async function () {
    gulp.watch('./sass/**/*.scss', gulp.series('styles'))
})
