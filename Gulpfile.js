var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps')
var sass = require('gulp-sass');
var bourbon = require('node-bourbon');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

var paths = {
  scripts: ['./js/**/*.js'],
  styles: ['./css/scss/**/*.scss'],
  stylesDEST: './css',
  scriptsDEST: './js/dist'
}


gulp.task('watch', function(){
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('minify', function(){
  gulp.watch(paths.scripts, ['minifyjs']);
});

gulp.task('styles', function(){
  gulp.src(paths.styles)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(concat('style.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.stylesDEST))
    .pipe(livereload({start: true}));
});

gulp.task('minifyjs', function(){
  gulp.src(paths.scripts)
    .pipe(sourcemaps.init())

    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js/build'));

});