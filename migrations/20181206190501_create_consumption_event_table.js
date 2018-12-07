
exports.up = async function (knex) {
  await knex.schema.createTable('consumption_event', (table) => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('user.id')
    table.integer('ingredient_id')
    table.foreign('ingredient_id').references('ingredient.id')
    table.index('user_id')
    table.integer('amount')
    table.timestamps()
    table.datetime('consumed')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('consumption_event')
}
