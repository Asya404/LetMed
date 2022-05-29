// Подключаем модули
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const webp = require('gulp-webp');

const cssFiles = [
    './pages/home/sass/main.scss',
    './pages/home/js/owlcarousel/owl.carousel.min.css',
    './pages/home/js/owlcarousel/owl.theme.default.min.css'
]

const cssFilesCoop = [
    './pages/cooperation/sass/main.scss'
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
        .pipe(gulp.dest('./pages/home/css'));
}


async function stylesCoop() {
    return gulp.src(cssFilesCoop)
        .pipe(concat('all.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            level: 2
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./pages/cooperation/css'));
}

async function img2Webp() {
    return gulp.src('./img/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('./img'));
}


gulp.task('styles', styles);
gulp.task('stylesCoop', stylesCoop);

gulp.task('watch', async function () { gulp.watch('./sass/**/*.scss', gulp.series('styles')) })
gulp.task('watchCoop', async function () { gulp.watch('./scssCoop/**/*.scss', gulp.series('stylesCoop')) })

gulp.task('images', img2Webp)
