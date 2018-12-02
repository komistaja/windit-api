import express from 'express'

const app = express()
const port = 3000

app.get('/test', (req, res) => res.send('Hello World (benis)!'))

app.listen(port, () => console.log('Listening on ${port}!'))
