var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var minifyCSS = require("gulp-minify-css");

gulp.task("sass", function() {
  gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("./"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});
