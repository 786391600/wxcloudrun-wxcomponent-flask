/*
 * @Author: Wangtao
 * @Date: 2024-01-03 18:40:08
 * @LastEditors: Wangtao
 * @LastEditTime: 2024-01-04 21:13:41
 */
const Koa = require('koa');
const app = new Koa();
const koaRoute = require('koa-route');


console.log('node 服务==============')

koaRoute.post('/action', (ctx) => {
  ctx.response.status = 200
  ctx.response.body = 'test';
})
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);