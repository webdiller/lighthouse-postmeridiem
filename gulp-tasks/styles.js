"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import sass from "gulp-sass";
import mincss from "gulp-clean-css";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("styles", () => {
    return gulp.src(paths.styles.src)
        .pipe(gulpif(!production, sourcemaps.init()))
        .pipe(plumber())
        .pipe(sass())
        .pipe(groupmedia())
        .pipe(autoprefixer({
            cascade: false,
            grid: true
        }))
        .pipe(mincss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(plumber.stop())
        .pipe(gulpif(!production, sourcemaps.write("./maps/")))
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(debug({
            "title": "CSS files"
        }))
        .on("end", browsersync.reload);
});
