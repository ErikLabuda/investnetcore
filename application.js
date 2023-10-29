const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
const mongooseConnection = require('./db/db')
const mainRouter = require('./routes/index')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api', mainRouter)

app.use((_, res) => {
    res.send({
        message: 'Not found!'
    })


})



mongooseConnection()
app.listen(5500, (req, res) => {
    console.log('Server up at 5500')
})


