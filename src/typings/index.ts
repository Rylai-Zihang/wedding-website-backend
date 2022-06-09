import { BaseResponse } from 'koa'

type HttpMethods = 'get' | 'post' | 'put' | 'delete'

interface KnexConfig {
  [key: string]: object
}

type Guest = {
  name: string
  number?: number
  extras?: string
  need_accommodation?: boolean
}

type CheckKey = 'token' | 'invitationCode'

type CheckMapType = {
  [K in CheckKey]: {
    checkBasis: string[]
    errorMessage: string
    status: number
    type: HttpMethods
  }
}

type ResponseIndex = keyof BaseResponse

type CheckFieldMap = Record<HttpMethods, ResponseIndex>

export {
  HttpMethods,
  KnexConfig,
  Guest,
  CheckKey,
  CheckMapType,
  CheckFieldMap,
  ResponseIndex
}
