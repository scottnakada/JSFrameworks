"use strict";

var gulp = require('gulp');

/* runs a local dev server */
var connect = require('gulp-connect');

/* Open a URL in the web server */
var open = require('gulp-open');

/* Bundles JS files */
var browserify = require('browserify');

/* Transforms React JSX to JS */
var reactify = require('reactify');

/* Use conventional text streams with Gulp */
var source = require('vinyl-source-stream');

/* Concatenates files */
var concat = require('gulp-concat');

/* Lint JS files, including JSX */
var lint = require('gulp-eslint');

/* Configure the system */
var config = {
    port: 9002,
    devBaseUrl: 'http://localhost',
    paths: {
        html: ['./src/*.html', './src/**/*.html'],
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './src/*.css',
            './src/**/*.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

/* Task connect - Start a local development server */
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

/* Task open - connect, then using dist/index.html as a source, open http://localhost:9000 in the webserver */
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

/* Task html - get files from the html source directories, copy them to the dist directory, and reload the webserver */
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

/* Task js - process the main.js file, do jsx transform, combine with other js, create a bundle.js output file */
gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)                                /* Transform the JSX to JS */
        .bundle()                                           /* combine the Js files into one file */
        .on('error', console.error.bind(console))           /* Show errors on the console */
        .pipe(source('bundle.js'))                          /* Name the files where the JS files will be combined */
        .pipe(gulp.dest(config.paths.dist + '/scripts'))    /* Define the target directory */
        .pipe(connect.reload());
    /* Reload the system when done */
});

/* Process the css files */
gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))                     /* Combine the css files into bundle.css */
        .pipe(gulp.dest(config.paths.dist + '/css'));
    /* And put the result in the dist/css directory */
});

/* Task images - copy the images to the destination directory */
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
    /* Publish the favicon */
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

/* Task list - lint files */
gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))   /* Lint, using eslint.config.json configuration file */
        .pipe(lint.format());
});

/* Task watch - watch for changes in files and reload the files */
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

/* Task default - run html, and open */
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);