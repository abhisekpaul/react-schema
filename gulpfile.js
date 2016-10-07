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
var through2 = require('through2');

var notifyMessage = function (filename) {
  gutil.log(gutil.colors.green('√') + ' ' + filename);
};


gulp.task('default', function () {

  gutil.log("Begining browseriy source: " + source_dir );

  var cache   = {};
  var source_dir = "src";
  var target_dir = "dist/";

  var bundle = function (check) {

    var stream = gulp.src([source_dir + '/index.js'])
    .pipe(bundler({ cache: {}, packageCache: {}, debug:true, delay: 1000}))
    .on('error', notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest(target_dir));

    stream.on('end', function() {
      notify().write('Browserify Bundling finished.');
    });

    return stream;
  };

  var bundler = function (options) {
    return through2.obj(function (file, enc, next) {
      if (cache[file.path]) {
        return cache[file.path].bundle(function(err, res){
            file.contents = res;
            next(null, file);
          });
      } else {
        var b = browserify(file.path, options);
        b.on('log', gutil.log);
        b.external('react');
        b.external('react-dom');
        b.external('react-addons-shallow-compare');
        b.external('jquery');

        b.on('bundle', notifyMessage.bind(null, 'BUNDLE ' + file.path));

        // for watch
        b = watchify(b,{delay:900});
        b.on('update', bundle.bind(null, true));
        cache[file.path] = b;

        b.bundle(function(err, res){
            if(err) {
              gutil.log(err, '', gutil.colors.magenta('123'));
              next(err, file);
            } else {
              file.contents = res;
              next(null, file);
            }
          });
      }
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
