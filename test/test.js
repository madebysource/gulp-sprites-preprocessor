var assert = require('assert');
var sprite = require('../');
var File = require('vinyl');

describe('sprites', function() {
  it('rewrites paths and generate image file', function(done) {
    var stream = sprite({ path: 'test/fixtures/' });

    var files = 0;
    stream.on('data', function(file) {
      files += 1;

      if (file.path === 'style.css') {
        assert.equal(file.contents.toString(), 'body { background: url(sprite.png); background-position: 0px 0px; }');
      }

      if (files === 2) { done(); }
    });

    stream.write(new File({
      path: 'style.css',
      contents: new Buffer('body { background: url(/images/sprites/a.png); }', 'utf-8')
    }));
  });
});
