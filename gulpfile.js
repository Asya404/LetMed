const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');


async function styles() {
    return gulp.src('./pages/home/sass/main.scss')
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
    return gulp.src('./pages/cooperation/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            level: 2
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./pages/cooperation/css'));
}

async function watch() {
    gulp.watch('./pages/home/sass/**/*.scss', styles);
    gulp.watch('./pages/cooperation/sass/**/*.scss', stylesCoop)
}

gulp.task('watch', watch)