import { Context } from 'koa';
import { query } from '../db'
import HomeService from '../services/homeService'

class HomeController {
  private service: HomeService = new HomeService()

  hello = async (ctx: Context) => {
    ctx.body = await this.service.hello()
  }

  getAllGuests = async (ctx: Context) => {
    const sql = 'select * from guests'
    const data = await query(sql)
    ctx.body = data
  }
}

export default new HomeController()
