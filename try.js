const express = require('express')
const http = require('http')
const app = express()
const port = process.env.PORT
publicDir = __dirname + '/public'
var path = require('path');

const username = 'drexter51'
const authkey = '930994931286b111c09386b924cec9ac'
const url = 'http://api.openweathermap.org/data/2.5/weather?q=pune,in&units=metric&APPID=${authkey}'

const request = http.get(url, response => {
	console.dir(response)
});

/*function getdata(){
}

app.use(express.static(publicDir));

app.get('/', (request, response) => {
  res.sendFile(path.join(publicDir,'/index.html'));
})

app.listen(port, (err) => {
  if (err) {
    return console.log('error', err)
  }

  console.log(`server is listening on ${port}`)
})
*/

