var koa = require('koa');
var npm = require('./');
var app = koa();

app.use(npm());

app.use(function *() {
  this.body = 'npm@' + this.npm.version;
})

app.listen(3000);
console.log('listening on port 3000');
