const Koa = require('koa');
const koaBody = require('koa-body');
const json = require('koa-json');
const hbs = require('koa-hbs');
const logger = require('koa-logger');

const todoRouter = require('./server/routes/todo');
const pageRouter = require('./server/routes/index');

const config = require('./server/config/');
const app = new Koa();

app.use(json());
app.use(logger());
app.use(koaBody());

app.use(hbs.middleware({
  viewPath: __dirname + '/views'
}));

app.use(pageRouter.routes()); // 页面路由
app.use(todoRouter.routes()); // todo api 路由

app.on('error', err => {
  log.error('server error', err)
});

app.listen(config.port);