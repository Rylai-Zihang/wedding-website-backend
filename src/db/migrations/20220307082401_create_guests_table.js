/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('guests', table => {
    table
      .bigIncrements('id')
      .primary()
      .notNullable()
    table
      .string('name')
      .notNullable()
      .unique()
    table.integer('number')
    table.string('extras')
    table.boolean('need_accommodation').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('guests')
}
