const mongoose = require('mongoose')

// Definice schématu pro model uživatele
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Jméno uživatele, povinné a unikátní
    surname: { type: String, required: true }, // Příjmení uživatele, povinné
    email: { type: String, required: true, unique: true }, // E-mail uživatele, povinný a unikátní
    password: { type: String, required: true } // Heslo uživatele, povinné
    
}, 
{ collection: 'users' } // Název kolekce (tabulky) v MongoDB, kam budou ukládána data
)
// Vytvoření modelu na základě definovaného schématu
const model = mongoose.model('UserSchema', UserSchema)

// Exportování vytvořeného modelu pro použití v jiných částech aplikace
module.exports = model
