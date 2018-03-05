const express = require('express')
const app = express()
const port = 5000

app.get('/', (request, response) => {
  res.render('pages/index')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
