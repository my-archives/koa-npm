var debug = require('debug')('koa-npm');
var exec  = require('co-exec');
var path  = require('path');
var env   = process.env;

module.exports = function (app) {

  return function *loadNPM(next) {
    if (app.npm) {
      return yield next;
    }

    var NODE_PATH = env.NODE_PATH;

    if (NODE_PATH) {
      try {
        app.npmRootPath = NODE_PATH.split(':')[0];
        app.npm = require('npm');
      } catch (e) {
        NODE_PATH = '';
      }
    }

    if (!NODE_PATH) {
      app.npmRootPath = (yield exec('npm root -g')).trim();
      app.npm = require(path.join(app.npmRootPath, 'npm'));
    }

    debug('npm global root %s', app.npmRootPath);

    yield next;
  };

};
