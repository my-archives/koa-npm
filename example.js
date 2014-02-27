var koa = require('koa');
var npm = require('./');
var app = koa();

app.use(npm(app));

app.use(function *() {
  this.body = 'npm@' + this.app.npm.version + '\n' + this.app.npmRootPath;
})

app.listen(3000);
console.log('listening on port 3000');
