const gulp = require('gulp'),
    sass = require('gulp-sass');

// sass
gulp.task('sass', ()=>{
    return gulp.src('./assets/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('dist/css'))
});



