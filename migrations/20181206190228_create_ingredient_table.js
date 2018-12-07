
exports.up = async function (knex) {
  await knex.schema.createTable('ingredient', (table) => {
    table.increments()
    table.string('name')
    table.bool('fodmap')
    table.bool('gluten')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('ingredient')
}
