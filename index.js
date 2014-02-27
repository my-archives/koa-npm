var debug = require('debug')('koa-npm');
var exec = require('co-exec');

module.exports = function (app) {

  return function *loadNPM(next) {
    if (app.npm) {
      return yield next;
    }

    var rootPath = (yield exec('npm root -g')).trim();
    module.paths.unshift(rootPath);

    debug('npm global root %s', rootPath);

    app.npm = require('npm');
    yield next;

  };

};
