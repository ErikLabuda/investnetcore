const User = require('../models/userModel')
const bcrypt = require('bcrypt')
//const moment = require('moment')


const register = (req, res) => {
    console.log(req.body)
    res.json({status: 'ahoj'})

    
}

const login = (req, res) => {
    
}

module.exports = {
    register,
    login
}