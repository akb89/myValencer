'use strict';

const gulp = require( 'gulp' );
const watchify = require('watchify');
const browserify = require('browserify');
const riotify = require('riotify');
const babelify = require('babelify');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const assign = require('lodash.assign');
const runSequence = require('run-sequence');

const PORT = 4040;

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist',
        },
        port: PORT
    })
});

gulp.task('copyHtml', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function(){
    return gulp.src('src/style/scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('src/style/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('images', function(){
    return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['copyHtml', 'sass', 'images', 'browserify'],
        callback
    )
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('src/style/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('index.html', function(callback) {runSequence('copyHtml', [browserSync.reload], callback)});
    gulp.watch('src/**/*.js', browserSync.reload);
    gulp.watch('src/**/*.tag', browserSync.reload);
});

// add custom browserify options here
var customOpts = {
    entries: ['src/index.js'],
    debug: true,
};
var opts = assign({}, watchify.args, customOpts);
var bundler = watchify(browserify(opts));
bundler.transform(riotify);
bundler.transform(babelify.configure({presets: ['es2015']}));

gulp.task('browserify', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
    gutil.log('Compiling javascript...');
    return bundler.bundle()
    // log errors if they happen
        .on('error', function (err) {
            gutil.log(err);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(source('bundle.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        //.pipe(uglify())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('dist/javascript/'))
        .pipe(browserSync.stream({once: true}));
}
