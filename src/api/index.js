import 'babel-polyfill'
import express from 'express'
import api from './api'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on ${port}!`))
app.use('/api', api())
