
const users = [
  { name: 'Test User', location: 'finland', locale: 'fin', password: 'password', created_at: new Date() },
  { name: 'Test User2', location: 'finland', locale: 'fin', password: 'password', created_at: new Date() },
  { name: 'Test User3', location: 'finland', locale: 'fin', password: 'password', created_at: new Date() },
  { name: 'Test User4', location: 'finland', locale: 'fin', password: 'password', created_at: new Date() },
  { name: 'Test User5', location: 'finland', locale: 'fin', password: 'password', created_at: new Date() }
]

exports.seed = async function (knex) {
  await knex('user').del()

  await knex('user').insert(users)
}
