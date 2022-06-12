import { Context } from 'koa'
import HomeService from '../services/homeService'
import {
  CheckKey,
  CheckMapType,
  CheckFieldMap,
  ResponseIndex
} from '../typings'

const checkMap: CheckMapType = {
  token: {
    type: 'get',
    checkBasis: ['asd421asd421'],
    errorMessage: '你想做什么？保护宾客隐私是我们该做的!',
    status: 403
  },
  invitationCode: {
    type: 'post',
    checkBasis: ['180325'],
    errorMessage: '错误的邀请码!',
    status: 403
  }
}

const checkFieldMap: CheckFieldMap = {
  get: 'query' as ResponseIndex,
  post: 'body',
  put: 'body',
  delete: 'body'
}

function check(ctx: Context, key: CheckKey): boolean {
  if (!checkMap[key]) {
    console.error('未记录的校验方式')
    return false
  }
  const { checkBasis, errorMessage, status, type } = checkMap[key]
  const field = checkFieldMap[type]
  const checkObject = ctx.response[field]

  if (checkObject == undefined || !checkBasis.includes(checkObject as string)) {
    ctx.response.status = status
    ctx.body = {
      status,
      errorMessage
    }
    return false
  }
  return true
}

class HomeController {
  private service: HomeService = new HomeService()

  hello = async (ctx: Context) => {
    ctx.body = await this.service.hello()
  }

  getAllGuests = async (ctx: Context) => {
    if (check(ctx, 'token')) {
      ctx.body = await this.service.getAllGuests()
      console.log(ctx.body)
    }
  }

  getGuestByName = async (ctx: Context) => {
    if (check(ctx, 'token')) {
      const name = ctx.request.query['name']
      ctx.body = await this.service.getGuestByName(name as string)
    }
  }

  createOrUpdateGuest = async (ctx: Context) => {
    console.log(ctx.request.body)
    if (check(ctx, 'invitationCode')) {
      ctx.body = this.service.createOrUpdateGuest(ctx.request.body)
    }
  }

  deleteGuest = async (ctx: Context) => {
    ctx.body = await this.service.deleteGuest(ctx.params.id)
  }
}

export default new HomeController()
