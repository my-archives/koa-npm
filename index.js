var debug = require('debug')('koa-npm');
var exec = require('co-exec');

module.exports = function () {

  return function *loadNPM(next) {
    if (this.npm) {
      return yield next;
    }

    var root = (yield exec('npm root -g')).trim();
    module.paths.unshift(root);

    debug('npm global root %s', root);

    this.npm = require('npm');
    yield next;

  };

};
