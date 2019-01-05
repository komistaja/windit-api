if (!global._babelPolyfill) {
  require('babel-polyfill')
}

const port = process.env.PORT || 3000
const app = require('./app')

let server = app.listen(port, () => {
  console.log(`Started on port ${server.address().port}`)
})

