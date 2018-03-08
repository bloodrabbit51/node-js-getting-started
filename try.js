const express = require('express')
const https = require('https')
const app = express()
const port = process.env.PORT
publicDir = __dirname + '/public'
var path = require('path');

const username = 'drexter51'
const authkey = '930994931286b111c09386b924cec9ac'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=pune,in&units=metric&APPID=930994931286b111c09386b924cec9ac'



function getdata(){
	const request = https.get(url, response => {
	let body = "";

	response.on('data',data => {
		body += data.toString();
	});

	response.on('end', () => {
		const profile = JSON.parse(body);
		console.log(profile.main.temp)
	});
});
}

app.use(express.static(publicDir));

getdata();

app.get('/', (request, response) => {
  res.sendFile(path.join(publicDir,'/index.html'));
})

app.listen(port, (err) => {
  if (err) {
    return console.log('error', err)
  }

  console.log(`server is listening on ${port}`)
})


