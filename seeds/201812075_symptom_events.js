require('babel-polyfill')

const datefns = require('date-fns')
const addHours = datefns.addHours
const rosie = require('rosie')
const factory = rosie.Factory
const faker = require('faker')

faker.seed(715517)

const rowAmountPerUser = 6000

factory.define('symptom_event')
  .attr('id')
  .attr('symptom_id')
  .attr('user_id')
  .attr('severity', () => faker.random.number(5))
  .attr('start_time')
  .attr('end_time')

exports.seed = async function (knex) {
  await knex('symptom_event').del()

  const users = await knex.from('user').select('id')
  const symptoms = await knex.from('symptom').select('id')
  const symptomEvents = []

  users.forEach(() => {
    for (let i = 0; i < rowAmountPerUser; i++) {
      const startTime = faker.date.between('2015-01-01', new Date())
      const endTime = faker.date.between(startTime, addHours(startTime, faker.random.number(6)))
      symptomEvents.push(
        factory.build('symptom_event', {
          user_id: users[faker.random.number(users.length - 1)].id,
          symptom_id: symptoms[faker.random.number(symptoms.length - 1)].id,
          start_time: startTime,
          end_time: endTime
        })
      )
    }
  })

  await knex.batchInsert('symptom_event', symptomEvents).then(result => {
    return result
  })
}
