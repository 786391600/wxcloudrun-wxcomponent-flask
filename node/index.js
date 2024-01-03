/*
 * @Author: Wangtao
 * @Date: 2024-01-03 18:40:08
 * @LastEditors: Wangtao
 * @LastEditTime: 2024-01-03 18:52:16
 */
const Koa = require('koa');
const app = new Koa();

console.log('node 服务==============')
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(80);