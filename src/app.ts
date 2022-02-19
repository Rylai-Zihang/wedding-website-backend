const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
import AppRoutes from './routes'

const router = new Router()

AppRoutes.forEach(route => router[route.method](route.path, route.action))

app.use(router.routes())
app.listen(3001)
