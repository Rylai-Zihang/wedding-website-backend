type HttpMethods = 'get' | 'post' | 'put' | 'delete'

interface KnexConfig {
  [key: string]: object
}

type Guest = {
  name: string
  number?: string
  extras: string
  need_accommodation: boolean
  invitation_code: string
  message?: string
}

type CheckKey = 'token' | 'invitation_code'

type CheckMap = {
  [K in CheckKey]: {
    checkBasis: string[]
    errorMessage: string
    type: HttpMethods | "header"
  }
}

type HTTPStatus = 200 | 403 | 500

type Result<T> = {
  code: HTTPStatus
  message: string
  data: T
}

type CheckBodyMap = Record<string, 'body' | 'query' | 'headers'>

export {
  HttpMethods,
  KnexConfig,
  Guest,
  CheckKey,
  CheckMap,
  CheckBodyMap,
  Result
}
