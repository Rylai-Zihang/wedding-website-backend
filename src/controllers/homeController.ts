import { Context } from 'koa'
import { OK_MESSAGE } from '../constants'
import HomeService from '../services/homeService'
import { check } from '../utils'

class HomeController {
  private service: HomeService = new HomeService()

  hello = async (ctx: Context): Promise<void> => {
    const data = await this.service.hello()
    ctx.body = {
      code: 200,
      message: OK_MESSAGE,
      data
    }
  }

  getAllGuests = async (ctx: Context): Promise<void> => {
    const data = await this.service.getAllGuests()
    ctx.body = {
      code: 200,
      message: OK_MESSAGE,
      data
    }
  }

  getGuestByName = async (ctx: Context) => {
    const name = ctx.request.query['name']
    const data = await this.service.getGuestByName(name as string)
    ctx.body = {
      code: 200,
      message: OK_MESSAGE,
      data
    }
  }

  createOrUpdateGuest = async (ctx: Context) => {
    if (check(ctx, 'invitation_code')) {
      const data = this.service.createOrUpdateGuest(ctx.request.body)
      ctx.body = {
        code: 200,
        message: OK_MESSAGE,
        data
      }
    }
  }

  deleteGuest = async (ctx: Context) => {
    const data = await this.service.deleteGuest(ctx.params.id)
    ctx.body = {
      code: 200,
      message: OK_MESSAGE,
      data
    }
  }
}

export default new HomeController()
