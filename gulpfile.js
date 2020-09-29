const { src, dest, watch, series } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

exports.default = function() {
    return src('src/*.js')
        .pipe(src('src/js/*.js'))
        .pipe(dest('./dist/'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('./dist/'));
}
