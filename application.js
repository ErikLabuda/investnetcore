const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const db = require('./db/db')

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.listen(9999, () => {
    console.log('Server up at 9999')
})

