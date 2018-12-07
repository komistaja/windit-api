require('babel-polyfill')

const rosie = require('rosie')
const factory = rosie.Factory
const faker = require('faker')

faker.seed(6315)

const rowAmountPerUser = 30000

factory.define('event')
  .attr('id')
  .attr('user_id')
  .attr('ingredient_id')
  .attr('amount', () => faker.random.number(5))
  .attr('created_at', () => new Date())
  .attr('consumed', () => faker.date.between('2015-01-01', new Date()))

exports.seed = async function (knex) {
  await knex('consumption_event').del()

  const users = await knex.from('user').select('id')
  const ingredients = await knex.from('ingredient').select('id')
  const events = []

  users.forEach(() => {
    for (let i = 0; i < rowAmountPerUser; i++) {
      events.push(
        factory.build('event', {
          user_id: users[faker.random.number(users.length - 1)].id,
          ingredient_id: ingredients[faker.random.number(ingredients.length - 1)].id
        })
      )
    }
  })

  await knex.batchInsert('consumption_event', events)
}
