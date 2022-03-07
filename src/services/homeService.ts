import { query } from '../db'
import sql from '../db/sql'


export default class HomeService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'))
  }

  getAllGuests = () => {
    const sql = 'select * from guests'
    return new Promise(async resolve => {
      const data = await query(sql)
      resolve(data)
    })
  }

  createGuest = () => {
    const sql = 'select * from guests'
    return new Promise(async resolve => {
      const data = await query(sql)
      resolve(data)
    })
  }
}
