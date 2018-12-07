require('babel-polyfill')

const rosie = require('rosie')
const factory = rosie.Factory
const faker = require('faker')

faker.seed(6315)

factory.define('symptom')
  .attr('name')

const names = [
  'Kaasu',
  'Kipu',
  'Ripuli',
  'Veriuloste',
  'Ylivilkas vatsa',
  'Kova vatsa'
]

let symptoms = []

names.forEach(symptom => {
  symptoms.push(factory.build('symptom', {
    name: symptom
  }))
})
console.log('symptoms: ', symptoms)

exports.seed = async function (knex) {
  await knex('symptom').del()

  await knex('symptom').insert(symptoms).then(result => {
    return result
  })
}
