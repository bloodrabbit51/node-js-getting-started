const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (request, response) => {
  response.send('Hello!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
