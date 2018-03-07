const express = require('express')
const app = express()
const port = process.env.PORT

const username = 'drexter51'
const authkey = '930994931286b111c09386b924cec9ac'
const url = 'http://api.openweathermap.org/data/2.5/weather?q=pune,in&units=metric&APPID='+authkey

function data(name,id){
	const msg = 'my name is ${name} with id as ${id}.'
	console.log(msg)
}

app.get('/', (request, response) => {
  data('shamim ali',134720)
  response.send('hello ')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('error', err)
  }

  console.log(`server is listening on ${port}`)
})


