var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('*.html', browserSync.reload);
    gulp.watch("css/**/*",browserSync.reload);
});
