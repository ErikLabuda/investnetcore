const User = require('../models/userModel')
const bcrypt = require('bcrypt')
//const moment = require('moment')


const register = async (req, res) => {
    // console.log(req.body)
    // res.json({status: 'Ahoj'})

    const {name, surname, email, password: plainTextPassword} = req.body
    const password = await bcrypt.hash(plainTextPassword, 10);
    
    try {
        const response = await User.create({
            name,
            surname,
            email,
            password
        })
        console.log('User created successfully: ', response)
    } catch (error) {
        console.log(error)
        return res.json({ status: 'error'})
    }
    
}

const login = (req, res) => {
    
}

module.exports = {
    register,
    login
}