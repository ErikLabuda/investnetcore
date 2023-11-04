const mongoose = require('mongoose');

// URL adresa vaší MongoDB databáze
const dbURL = 'mongodb+srv://labe01:Erik1Erik2@mongodb.dy89bif.mongodb.net/invest';

// Funkce pro navázání spojení s databází pomocí Mongoose
async function mongooseConnection() {
  try {
    // Pokusíme se připojit k MongoDB databázi
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongoose connected');
  } catch (error) {
    // Pokud dojde k chybě při připojení, zalogujeme chybovou zprávu
    console.error('Mongoose connection error:', error);
  }
}

// Získání reference na spojení s databází
const dbConnection = mongoose.connection;

// Nastavíme obsluhu chybové události pro spojení s databází
dbConnection.on('error', (err) => console.error(`Connection error ${err}`));

// Nastavíme obsluhu události, která se zavolá po úspěšném připojení k databázi
dbConnection.once('open', () => console.log('Connected to DB!'));

module.exports = mongooseConnection;
