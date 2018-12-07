
exports.up = async function (knex) {
  await knex.schema.createTable('symptom_event', (table) => {
    table.increments()
    table.integer('symptom_id')
    table.foreign('symptom_id').references('symptom.id')
    table.integer('severity')
    table.integer('user_id')
    table.foreign('user_id').references('user.id')
    table.dateTime('start_time')
    table.dateTime('end_time')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('symptom_event')
}
