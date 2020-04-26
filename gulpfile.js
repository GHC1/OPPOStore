const gulp = require("gulp");
const sass = require("gulp-sass");
gulp.task("gulpAll", function(){
    return gulp.src("*.{sass,scss}")
    .pipe(sass())
    .pipe(gulp.dest("css/"))
})
// gulp.task("copy_img", function(){
// //     return gulp.src("images/**/*{png,jpg}")
// //     .pipe(gulp.dest("dist/images"))
// // })

// gulp.task("copy-img", function(){
//     // return gulp.src("images/*{jpg,png}")
//     // .pipe(gulp.dest("dist/images"));
//     return gulp.src("images/**/*{jpg,png}")
//     .pipe(gulp.dest("dist/images"))
// })



// gulp.task("html", function(){
//     return gulp.src("/**/*.html")
//     .pipe(gulp.dest("dist/html"))
// })
// gulp.task("css" , function(){
//     return gulp.src("css/**/*.css")
//     .pipe(gulp.dest("dist/css"))
// })
gulp.task("watch", function(){
    gulp.watch("*.{sass,scss}", ["gulpAll"])
    
})