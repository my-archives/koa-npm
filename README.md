Koa-npm
-------
Require global npm module middleware for Koa.

### Installation

```sh
$ npm install koa-npm
```

### Example

```js
var koa = require('koa');
var npm = require('koa-npm');
var app = koa();

app.use(npm());

app.use(function *() {
  this.body = 'npm@' + this.npm.version;
})

app.listen(3000);
console.log('listening on port 3000');
```

#### License

MIT
