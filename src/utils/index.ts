import { Context } from 'koa'
import { CHECK_BODY_MAP as checkBodyMap, CHECK_MAP as checkMap } from '../constants'
import { CheckKey } from '../typings'

function check(ctx: Context, key: CheckKey): boolean {
  if (!checkMap[key]) {
    console.error('未记录的校验字段')
    return false
  }
  const { checkBasis, errorMessage, type } = checkMap[key]
  const field = checkBodyMap[type]
  const checkObject = ctx.request[field]
  if (
    checkObject == undefined ||
    !checkBasis.includes(checkObject[key] as string)
  ) {
    ctx.response.status = 403
    ctx.body = {
      status: 403,
      message: errorMessage,
      data: null
    }
    return false
  } else {
    return true
  }
}


export { check }