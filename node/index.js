/*
 * @Author: Wangtao
 * @Date: 2024-01-03 18:40:08
 * @LastEditors: Wangtao
 * @LastEditTime: 2024-01-03 18:45:49
 */
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(8093);