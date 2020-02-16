console.log('Server-side code running');

const express = require('express');
const fs = require('fs');
const util = require('util');
const app = express();

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

const readFile = util.promisify(fs.readFile);

var standard;
fs.readFile('./json/standard.json', (err, data) => {
	if (err) throw err;
	let value = JSON.parse(data);
	standard = value;
});

var advanced;
fs.readFile('./json/advanced.json', (err, data) => {
	if (err) throw err;
	let value = JSON.parse(data);
	advanced = value;
});

var expert;
fs.readFile('./json/expert.json', (err, data) => {
	if (err) throw err;
	let value = JSON.parse(data);
	expert = value;
});

var china;
fs.readFile('./json/china.json', (err, data) => {
	if (err) throw err;
	let value = JSON.parse(data);
	china = value;
});

var moyenorient;
fs.readFile('./json/moyenorient.json', (err, data) => {
	if (err) throw err;
	let value = JSON.parse(data);
	moyenorient = value;
});

var music;
fs.readFile('./json/music.json', (err, data) => {
	if (err) throw err;
	let value = JSON.parse(data);
	music = value;
});


var lafrance;
fs.readFile('./json/lafrance.json', (err, data) => {
	if (err) throw err;
	let value = JSON.parse(data);
	lafrance = value;
});
// serve the homepage
app.get('/', (req, res) => {
	
  res.sendFile(__dirname + '/index.html');
  
});
app.get('/data', (req,res) => {
	res.json({	"standard" : standard,
			   	"advanced" : advanced,
			  	"expert" : expert,
			  	"china" : china,
			  	"moyenorient" : moyenorient,
			  	"music" : music,
			  	"lafrance" : lafrance});
});