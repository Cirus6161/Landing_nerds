var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
   return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
       .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
       .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'],{cascade: true}))
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.reload({stream: true}));
});

/*Браузер Синк*/
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
/*Браузер Синк*/


gulp.task('watch', ['browser-sync'], function(){
    gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);
















/*
// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/!*.scss", ['sass']);
    gulp.watch("app/!*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(['app/sass/!**!/!*.sass', 'app/sass/!**!/!*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'],{cascade: true}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['watch']);

*/

