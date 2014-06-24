# [gulp](http://gulpjs.com)-sprites-preprocessor [![Build Status](https://travis-ci.org/madebysource/gulp-sprites-preprocessor.svg?branch=master)](https://travis-ci.org/madebysource/gulp-sprites-preprocessor)

> [Sprites Preprocessor](https://github.com/madebysource/sprites-preprocessor) - Generate sprites from css file

## Install

```sh
$ npm install --save-dev gulp-sprites-preprocessor
```


## Usage

```js
var gulp = require('gulp');
var sprites = require('gulp-sprites-preprocessor');

gulp.task('default', function () {
  return gulp.src('style.css')
    .pipe(sprites({ name: 'sprite.png', path: 'images/sprites', prefix: '/images/sprites/' }))
    .pipe(gulp.dest('dist'));
});
```

## API

### sprites(options)

#### Options

##### name

Type: `String`
Default: `sprite.png`

Name of the output sprite file.

##### path

Type: `String`
Default: `images/sprites`

Path to the source image files

##### prefix

Type: `String`
Default: `/images/sprites/`

Css prefix in image url to know what images transform into sprites

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
