const Koa = require('koa');
const koaBody = require('koa-body');
const json = require('koa-json');
const logger = require('koa-logger');
const hbs = require('koa-hbs');
const handleError = require('koa-handle-error');

const todoRouter = require('./server/routes/todo');

const config = require('./server/config/');
const app = new Koa();

const onError = err => {
  console.error(err);
};
app.use(handleError(onError));  // must register first!

app.use(json());
app.use(logger());
app.use(koaBody());

app.use(hbs.middleware({
  viewPath: __dirname + '/views'
})); // Must be used before any router is used

app.use(async function (ctx) {
  await ctx.render('index', {
    user: 'Coder'
  })
});

app.use(todoRouter.routes());

app.listen(config.port);