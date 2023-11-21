const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'vnksdalvcdmľšuírľ=rľšťžéťiohg(!)":(/)!!Y)X242ˇrfvklsdafjgťzéikophefvasdjklfagwrkje'
//const moment = require('moment')

// Funkce pro registraci uživatele
const register = async (req, res) => {
    // console.log(req.body)
    // res.json({status: 'Ahoj'})

    // Získání potřebných dat z požadavku
    const {name, surname, email, password: plainTextPassword} = req.body;
    
    // Hashování hesla uživatele pro bezpečné uložení do databáze
    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
        // Vytvoření nového uživatele v databázi
        const response = await User.create({
            name,
            surname,
            email, 
            password
        });
        console.log('User created successfully: ', response);
    } catch (error) {
        if(error.code === 11000){
            return res.json({
                status: 'Chyba', 
                error: 'Užívateľ s týmto emailom už existuje.'
            })
        }
        throw error
       
    }
    return res.json({status: 'ok'})
}

// Funkce pro přihlášení uživatele
const login = async (req, res) => {
    console.log(req.body)
    

    const { 
            email,
            password } = req.body

    const user = await User.findOne({email}).lean()

    if(!user){
        return res.json({
            status: 'error',
            error: 'Zadali ste nesprávny email alebo heslo.'})
        
    }

    if(await bcrypt.compare(password, user.password)){

        const token = jwt.sign({
            userid: user._id, 
            email: user.email 
        }, 
        JWT_SECRET
        )
        return res.json({status: 'ok', data: token})
    }

    return res.json({status: 'error', error: 'Zadali ste nesprávny email alebo heslo.'}) 
}

const changePassword = async (req, res) =>{
    console.log(req.body)
    const { token, newpassword } = req.body
    try {
        const user = jwt.verify(token, JWT_SECRET)
        console.log(user)
        const _id = user.id
        
    

        const hashedPassword = await bcrypt.hash(newpassword, 10)


        await User.updateOne(
            { _id } ,
            { 
                $set: { password: hashedPassword }
            }
        )
        res.json({status: 'Ok'})
        
    } catch (error) {
        res.json({status: 'error', error: ';))'})
    }
    
}

module.exports = {
    register,
    login, 
    changePassword
}
