const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: { type: String, requierd: true, unique: true },
    name: { type: String, requierd: true, unique: true },
    surname: { type: String, required: true},
    password: { type: String, required: true },
    email: { type: String, requierd: true, unique: true}
}, 
    { collection: 'users'}
)

const model = mongoose.model('UserSchema', UserSchema)