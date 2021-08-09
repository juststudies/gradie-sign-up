let postcss = require('gulp-postcss');
let gulp = require('gulp');
let csswring = require('csswring');

gulp.task('css', ()=>{
    let processors = [
        csswring
    ]
    return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

