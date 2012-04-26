var fs = require('../lib/fs');
var assert = require('assert');

/**
 * Tests the recursive creation of a directory
 */
exports.testRecursiveMkdir = function() {
  fs.mkdir('/tmp/example_dir/first/second/third/fourth/fifth', 0777, true, function (err) {
    assert.isUndefined(err);
  });
}

exports.testRecursiveSyncMkdir = function() {
  try {
    fs.mkdirSync('/tmp/example_sync/first/second/third/fourth/fifth', 0777, true);
  } catch (e) {
    console.log(e);
  }
}
