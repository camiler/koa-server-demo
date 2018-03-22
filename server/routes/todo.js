const Router = require('koa-router');
const router = new Router({
  prefix: '/todo'
});

const list = ['build koa demo', 'finish wetherClock', 'read 《you do not known javascript》'];

router
  .get('/', (ctx, next) => {
    ctx.body = {list};
  })
  .post('/', (ctx, next) => {
    const {item} = ctx.request.body;

    if (item) {
      if (list.includes(item)) {
        ctx.status = 409;
        return;
      }
      list.push(item);
      ctx.body = {list};
    } else {
      ctx.status = 400;
    }
  })
  .patch('/:id/:item', (ctx, next) => {
    const {id, item} = ctx.params;
    if (typeof (id - 0) === 'number') {
      list[id] = item;
      ctx.body = item;
      return;
    }
    ctx.status = 400;
  })
  .put('/:id/:item', (ctx, next) => {
    const {id, item} = ctx.params;
    if (typeof (id - 0) === 'number') {
      list[id] = item;
      ctx.body = {list};
      return;
    }
    ctx.status = 400;
  })

  .del('/:id', (ctx, next) => {
    const {id} = ctx.params;
    const n = list.length;
    if (typeof (id - 0) === 'number' && id < n && id >= 0) {
      list.splice(id, 1);
      console.log(list);
      ctx.status = 200;
      return;
    }
    ctx.status = 400;
  });

module.exports = router;