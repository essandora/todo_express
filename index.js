const express = require('express')
const app = express()
const fs = require('fs');

// use ejs filed to prepare templates for views
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname))

app.get('/', (req, res) => {
	// get the data
 fs.readFile('./tasks', 'utf8', (err, data) => {
 	if (err) {
 		console.error(err);
 		return;
 	}
 	console.log(data);
 	console.log(typeof data);
 	console.log(data.split("\n"))
 	//tasks list from the data
 	const tasks = ('Study CSS', 'Prepare presentation', 'Finish first web app', 'Have a cookie')
 	res.render('index', {tasks: tasks})
 	});
 })

app.post('/', (reg, res) => { 
	console.log('form and data')
	});


app.listen(3001, () => {
console.log('Example app is started at http://localhost:3001')
}) 
