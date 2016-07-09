var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var babelify   = require('babelify');
var buffer     = require('vinyl-buffer');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var notify = require("gulp-notify");
var transform = require('vinyl-transform');
var watchify = require('watchify');

gulp.task('default', function () {

  gutil.log("Begining browseriy source");

  var notifyMessage = function (filename) {
    gutil.log(gutil.colors.green('√') + ' ' + filename);
  };

  var cache   = {};

  var bundle = function (check) {

    var stream = gulp.src(['examples/app.js'])
    .pipe(bundler({ cache: {}, packageCache: {}, debug:true, delay: 1000}))
    .on('error', function (error){
      notify().write(error);
    })
    .pipe(gulp.dest('examples/build'));

    stream.on('end', function() {
      notify().write('Browserify Bundling finished.');
    });

    return stream;
  };

  var bundler = function (options) {

    return transform(function(filename) {
      if (cache[filename]) {
        return cache[filename].bundle();
      }

      var b = browserify(options);

      b.on('log', gutil.log);
      b.add(filename);

      b.on('bundle', notifyMessage.bind(null, 'BUNDLE ' + filename));

      b = watchify(b);

      b.on('update', bundle.bind(null, true));

      cache[filename] = b;

      return b.bundle();
    });
  };
  return bundle(false);

});

/**
 * Examples Build
 */
gulp.task('build-examples', function() {
  return browserify({
           debug   : process.env.NODE_ENV != 'production',
           entries : [
             'examples/app.js'
           ]
         })
         .transform(babelify)
         .bundle()
         .pipe(source('app.js'))
         .pipe(buffer())
         .pipe(gulp.dest('examples/build'));
});

gulp.task('watch-examples', function() {
  return gulp.watch([
    'src/**/*.js',
    'examples/**/*.js',
    '!examples/build/app.js'
  ], {}, function() {
    return gulp.start('build-examples');
  });
});
