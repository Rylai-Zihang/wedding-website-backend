import { Context } from 'koa'
import HomeService from '../services/homeService'

class HomeController {
  private service: HomeService = new HomeService()

  hello = async (ctx: Context) => {
    ctx.body = await this.service.hello()
  }

  getAllGuests = async (ctx: Context) => {
    ctx.body = await this.service.getAllGuests()
  }

  createGuest = async (ctx: Context) => {
    ctx.body = await this.service.createGuest(ctx.request.body)
  }

  deleteGuest = async (ctx: Context) => {
    ctx.body = await this.service.deleteGuest(ctx.params.id)
  }
}

export default new HomeController()
