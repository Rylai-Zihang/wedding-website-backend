import knex from '../db/connection'
import { Guest } from '../typings'

export default class HomeService {
  hello = () => {
    return new Promise(resolve =>
      resolve('Hello and welcome to visit our backend service')
    )
  }

  getAllGuests = () => {
    return knex('guests').select('*')
  }

  getGuestByName = (name: string) => {
    return knex('guests')
      .select('*')
      .where({ name: name })
  }

  createOrUpdateGuest = async (guest: Guest) => {
    const guestList = await knex<Guest>('guests')
      .select()
      .where('name', guest.name);
      if(guestList.length == 0) {
        return knex('guests').insert({
          'name': guest.name,
          'number':guest.number,
          'extras':guest.extras,
          'need_accommodation':guest.need_accommodation
        }).returning('*')
      } else {
        return knex('guests').update({
          'name': guest.name,
          'number':guest.number,
          'extras':guest.extras,
          'need_accommodation':guest.need_accommodation
        }).where('name', guest.name)
      }
    
  }

  deleteGuest = (id: number) => {
    return knex('guests')
      .del()
      .where({ id })
      .returning('*')
  }
}
