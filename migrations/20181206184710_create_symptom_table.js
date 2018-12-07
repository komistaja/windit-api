
exports.up = async function (knex) {
  await knex.schema.createTable('symptom', (table) => {
    table.increments()
    table.string('name')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('symptom')
}
