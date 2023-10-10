const express = require('express')
const app = express()

// use ejs filed to prepare templates for views
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname))

app.get('/', (req, res) => {
 res.render('index')
 });

app.listen(3001, () => {
console.log('Example app is started at http://localhost:3001')
}) 
