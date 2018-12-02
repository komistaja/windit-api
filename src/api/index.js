import express from 'express'
import testi from './testi'

require('dotenv').config()

const app = express()
const port = process.env.PORT ? process.env.PORT : 3000

app.use('/test', testi())

app.listen(port, () => console.log(`Listening on ${port}!`))
