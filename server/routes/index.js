const Router = require('koa-router');
const pageRouter = new Router();

pageRouter.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Home page',
    text: 'page one!'
  })
});

pageRouter.get('/todo', async(ctx, next) => {
  await ctx.render('todo', {
    title: 'todo work',
    text: 'todo work page!'
  })
})

module.exports = pageRouter;