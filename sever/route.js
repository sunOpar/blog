var Koa = require('koa');
var app = new Koa();

app.use(ctx =>{
  ctx.body = 'hello world';
});

app.listen(3000)