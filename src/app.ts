import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
// refer to https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36161
import { DefaultState, Context } from 'koa'

const app = new Koa()

import AppRoutes from './routes'
const router = new Router<DefaultState, Context>()
AppRoutes.forEach(route => router[route.method](route.path, route.action))

const PORT = process.env.PORT || 3001

app.use(bodyParser())
app.use(router.routes())

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
