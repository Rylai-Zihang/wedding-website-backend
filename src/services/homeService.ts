import knex from '../db/connection'
import { Guest } from '../typings'

export default class HomeService {
  hello = () => {
    return new Promise(resolve => resolve('hello world'))
  }

  getAllGuests = () => {
    return knex('guests').select('*')
  }

  getGuestByName = (name: string) => {
    return knex('guests').select('*').where({'name': name})
  }

  createGuest = (guest: Guest) => {
    return knex('guests')
      .insert(guest)
      .returning('*')
  }

  deleteGuest = (id: number) => {
    return knex('guests')
      .del()
      .where({ id })
      .returning('*')
  }
}
