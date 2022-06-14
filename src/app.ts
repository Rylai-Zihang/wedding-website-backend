import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
// refer to https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36161
import { DefaultState, Context } from 'koa'

const app = new Koa()

import AppRoutes from './routes'
import { check } from './utils'
const router = new Router<DefaultState, Context>()
AppRoutes.forEach(route => router[route.method](route.path, route.action))

const PORT = process.env.PORT || 3001

// global error handler
app.use(async (ctx, next) => {
  try {
    // token validate
    if (check(ctx, 'token')) {
      await next()
    }
  } catch (error) {
    // TODO error type
    const status = 500
    ctx.status = status
    ctx.body = {
      code: status,
      message: JSON.stringify(error),
      data: null
    }
    ctx.app.emit('error', error, ctx)
  }
})

app.use(bodyParser())
app.use(router.routes())

app.on('error', error => {
  console.error('Ooops..\n', error)
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
