import Koa from 'koa';
import Router from '@koa/router';

// 创建 Koa 应用
const app = new Koa();
const router = new Router();

// 添加一些中间件
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// 定义路由
router.get('/', async (ctx) => {
  ctx.body = { message: 'Hello from Koa on Node Functions!' };
});


// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 导出处理函数
export default app;
