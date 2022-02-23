import * as Koa from 'koa'
import * as Router from 'koa-router'

// refer to https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36161
import { DefaultState, Context } from 'koa'

const app = new Koa()
import AppRoutes from './routes'

const router = new Router<DefaultState, Context>()

AppRoutes.forEach(route => router[route.method](route.path, route.action))

app.use(router.routes())
app.listen(3001)

console.log('server is running at http://localhost:3001')
