import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('guests').del()

  // Inserts seed entries
  await knex('guests').insert([
    { name: 'Jack', need_accommodation: false },
    { name: 'Ryan', need_accommodation: false, extras: 2 },
    { name: 'Jane', phone: '13218195990', need_accommodation: false }
  ])
}
