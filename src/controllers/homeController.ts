import { Context } from 'koa'
import HomeService from '../services/homeService'

class HomeController {
  private service: HomeService = new HomeService()

  hello = async (ctx: Context) => {
    ctx.body = await this.service.hello()
  }

  getAllGuests = async (ctx: Context) => {
    if(ctx.request.query['token'] !== 'asd421asd421'){
      ctx.response.status = 403
      ctx.body = '你想做什么？保护宾客隐私是我们该做的!'
    }else{
      ctx.body = await this.service.getAllGuests()
    }
  }

  createGuest = async (ctx: Context) => {
    ctx.body = await this.service.createGuest(ctx.request.body)
  }

  deleteGuest = async (ctx: Context) => {
    ctx.body = await this.service.deleteGuest(ctx.params.id)
  }
}

export default new HomeController()
