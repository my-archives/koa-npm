var debug = require('debug')('koa-npm');
var exec  = require('co-exec');
var path  = require('path');

module.exports = function (app) {

  return function *loadNPM(next) {
    if (app.npm) {
      return yield next;
    }

    app.npmRootPath = (yield exec('npm root -g')).trim();

    debug('npm global root %s', app.npmRootPath);

    app.npm = require(path.join(app.npmRootPath, 'npm'));
    yield next;

  };

};
