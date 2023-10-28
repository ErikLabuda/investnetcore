const mongoose = require('mongoose');

// URL adresa vašej MongoDB databázy
const dbURL = 'mongodb+srv://labe01:Erik1Erik2@mongodb.dy89bif.mongodb.net/admin';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Chyba pripojenia k databáze:', error);
});

db.once('open', () => {
  console.log('Pripojené k databáze MongoDB');
});
