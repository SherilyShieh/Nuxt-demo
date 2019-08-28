const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router({ prefix: '/api/users' })

const users = [{ name: 'Tom', id: 1 }, { name: 'Jerry', id: 2 }]
router.get('/:id', (ctx) => {
  const user = users.find((u) => u.id === Number(ctx.params.id))
  if (user) {
    ctx.body = { ok: 1, user }
  } else {
    ctx.body = { ok: 0 }
  }
})

app.use(router.routes())
app.listen(3001)
