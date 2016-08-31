//
//  gulpfile.js
//

'use strict';
/* jshint node: true */

// Configure options
var CSS_TASK = 'css',
    CSS_FILES = [
        'css/libs/normalize.css',
        'css/libs/helpers.css',
        'css/main.less',
        'css/libs/print.css'
    ],
    CSS_DEST = 'style.css',
    CSS_MIN_BUILD_DIR = '.',
    JS_TASK = 'js',
    JS_FILES = [
        'js/libs/fontfaceobserver.standalone.js',
        'js/plugins.js',
        'js/script.js'
    ],
    JS_DEST = 'app.js',
    LINT_TASK = 'lint',
    LINT_FILES = ['gulpfile.js', 'js/*.js'],
    WATCH_TASK = 'watch',
    CSS_WATCH_FILES = 'css/**/*.{less,css}',
    MINIFY_SUFFIX = '.min',
    HASHFILE_SUFFIX = '.hashsum',
    CSS_HASH_FILE = '',
    JS_HASH_FILE = '',
    BUILD_DIR = 'build';



// Take it away
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    autoprefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    pixrem = require('gulp-pixrem'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    hashsum = require('gulp-hashsum'),
    concat = require('gulp-concat');

// Build CSS & JS Hash file names
var hashnames = [CSS_DEST, JS_DEST].map(function (filename) {
    filename = filename.split('.');
    filename.splice(-1, 0, MINIFY_SUFFIX.replace('.', ''));
    filename = filename.join('.') + HASHFILE_SUFFIX;
    return filename;
});
CSS_HASH_FILE = hashnames[0];
JS_HASH_FILE = hashnames[1];


var errorhandler = function (error) {
    gutil.log(gutil.colors.red(error.name), error.message);
    gutil.beep();
    this.emit('end');
};

gulp.task(CSS_TASK, function () {
    return gulp.src(CSS_FILES)
        .pipe(concat(CSS_DEST))
        .pipe(less())
        .on('error', errorhandler)
        .pipe(autoprefix(["last 3 version", "> 1%", "> 1% in IN", "ie 8", "ie 7", "iOS 5"]))
        .pipe(pixrem())
        .pipe(gulp.dest(BUILD_DIR))
        
        // Minified
        .pipe(minifycss({compatibility:'ie7'}))
        .pipe(rename({ 'suffix' : MINIFY_SUFFIX }))
        .pipe(gulp.dest(BUILD_DIR))
        
        // Hash for cachebusting
        .pipe(rename('1')) // the name is appended to the generated hash
        .pipe(hashsum({
            filename: CSS_HASH_FILE,
            dest: BUILD_DIR,
            delimiter: ''
        }));
});

gulp.task(LINT_TASK, function () {
    return gulp.src(LINT_FILES)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

function js_task(JS_FILES, JS_DEST, JS_HASH_FILE) {
    return function() { 
        return gulp.src(JS_FILES)
            .pipe(concat(JS_DEST))
            .pipe(gulp.dest(BUILD_DIR))
            
            // Minified
            .pipe(uglify())
            .pipe(rename({ 'suffix' : MINIFY_SUFFIX }))
            .pipe(gulp.dest(BUILD_DIR))
            
            // Hash for cachebusting
            .pipe(rename('1')) // the name is appended to the generated hash
            .pipe(hashsum({
                filename: JS_HASH_FILE,
                dest: BUILD_DIR,
                delimiter: ''
        }));
    };
}
gulp.task(JS_TASK, js_task(JS_FILES, JS_DEST, JS_HASH_FILE));


gulp.task(WATCH_TASK, function () {
    gulp.watch(CSS_WATCH_FILES, [CSS_TASK]);
    // gulp.watch(JS_FILES, [JS_TASK]);
    gulp.watch(LINT_FILES, [LINT_TASK]);
});

// Run individual tasks, then start the watcher
gulp.task('default', [
    CSS_TASK,
    // JS_TASK,
    LINT_TASK,
    WATCH_TASK
]);
