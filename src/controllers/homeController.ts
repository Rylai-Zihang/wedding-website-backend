import HomeService from '../services/homeService'

class HomeController {
  private service: HomeService = new HomeService()

  hello = async ctx => {
    ctx.body = await this.service.hello()
  }

  helloAaaa = async ctx => {
    ctx.body = 'aaaaa'
  }
}

export default new HomeController()
