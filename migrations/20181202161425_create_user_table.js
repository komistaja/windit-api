
exports.up = async function (knex) {
  await knex.schema.createTable('user', (table) => {
    table.increments()
    table.string('name')
    table.string('location')
    table.string('locale')
    table.string('password')
    table.dateTime('lastlogin')
    table.timestamps()
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('user')
}
