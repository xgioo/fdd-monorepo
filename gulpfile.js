import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import babel from "gulp-babel";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import cleanCSS from "gulp-clean-css";
import { deleteAsync } from "del";
const sass = gulpSass(dartSass);
const paths = {
  styles: {
    src: "packages/them-chalk/src/**/*.scss",
    dest: "packages/components/dist/them-chalk/",
  },
  scripts: {
    src: "packages/utils/src/**/*.js",
    dest: "packages/utils/dist/",
  },
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () =>
  deleteAsync(["packages/components/dist/them-chalk", "packages/utils/dist"]);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("index.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

/*
 * You could even use `export as` to rename exported tasks
 */
function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}
export { watchFiles as watch };

const build = gulp.series(clean, gulp.parallel(styles, scripts));
/*
 * Export a default task
 */
export default build;
