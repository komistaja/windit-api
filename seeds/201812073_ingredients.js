require('babel-polyfill')

const rosie = require('rosie')
const factory = rosie.Factory
const faker = require('faker')

faker.seed(6315)

factory.define('ingredient')
  .attr('name')
  .attr('fodmap', () => faker.random.boolean())
  .attr('gluten', () => faker.random.boolean())

const names = [
  'Riisi',
  'Papu',
  'Herne',
  'Tofu',
  'Salaatti',
  'Parsakaali',
  'Herkkusieni',
  'Paprika'
]

let ingredients = []

names.forEach(ingredient => {
  ingredients.push(factory.build('ingredient', {
    name: ingredient
  }))
})
console.log('ingredienst: ', ingredients)

exports.seed = async function (knex) {
  await knex('ingredient').del()
  await knex('ingredient').insert(ingredients).then(result => {
    return result
  })
}
