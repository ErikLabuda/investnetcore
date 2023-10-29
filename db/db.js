const mongoose = require('mongoose');

// URL adresa vašej MongoDB databázy
const dbURL = 'mongodb+srv://labe01:Erik1Erik2@mongodb.dy89bif.mongodb.net/admin';

async function mongooseConnection() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongoose connected');
  } catch (error) {
    console.error('Mongoose connection error:', error);
  }
}

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.error(`Connection error ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

module.exports = mongooseConnection;
