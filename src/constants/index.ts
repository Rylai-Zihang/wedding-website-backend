import { CheckMap, CheckBodyMap } from '../typings'

const CHECK_MAP: CheckMap = {
  token: {
    type: 'get',
    checkBasis: ['asd421asd421'],
    errorMessage: '你想做什么？保护宾客隐私是我们该做的!'
  },
  invitation_code: {
    type: 'post',
    checkBasis: ['180325'],
    errorMessage: '错误的邀请码!'
  }
}

const CHECK_BODY_MAP: CheckBodyMap = {
  get: 'query',
  post: 'body',
  put: 'body',
  delete: 'body'
}

const OK_MESSAGE = 'OK'

export { CHECK_MAP, CHECK_BODY_MAP, OK_MESSAGE }
