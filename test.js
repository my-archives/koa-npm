var koa = require('koa');
var request = require('supertest');
var npm = require('./');

describe('Koa NPM', function() {

  it('should work', function(done) {
    var app = koa();
    app.use(npm());
    app.use(function *() {
      this.body = 'npm@' + this.npm.version; 
    });

    request(app.listen())
      .get('/')
      .expect(200, done);
  });

});
