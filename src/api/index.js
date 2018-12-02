import express from 'express'
import testi from './testi'

const app = express()
const port = 3000

app.use('/test', testi())

app.listen(port, () => console.log(`Listening on ${port}!`))
