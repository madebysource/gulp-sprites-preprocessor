var gutil = require('gulp-util');
var through = require('through2');
var spritesPreprocessor = require('sprites-preprocessor');
var File = require('vinyl');
var extend = require('node.extend');

var defaultOptions = {
  name: 'sprite.png'
};

var plugin = function(options) {
  options = extend(true, {}, defaultOptions, options);

  var stream = through.obj(function(file, enc, callback) {
    if (file.isNull()) {
      stream.push(file);
      return callback();
    }

    if (file.isStream()) {
      stream.emit('error', new gutil.PluginError('gulp-sprites-preprocessor', 'Streaming not supported'));
      return callback();
    }

    spritesPreprocessor(options, file.contents.toString(), function(err, css, image) {
      if (err) { return stream.emit('error', new gutil.PluginError('gulp-sprites-preprocessor', err)); }

      file.contents = new Buffer(css, 'utf-8');

      stream.push(file);

      stream.push(new File({
        path: options.name,
        contents: new Buffer(image, 'utf-8')
      }));

      callback();
    });
  });

  return stream;
};

module.exports = plugin;
