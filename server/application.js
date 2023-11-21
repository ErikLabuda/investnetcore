const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');

// Importování funkce pro navázání spojení s MongoDB databází
const mongooseConnection = require('./db/db');

// Importování hlavního routeru pro aplikaci
const mainRouter = require('./routes/index');

// Nastavení zpracování těla požadavků jako URL kódovaného a JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Povolení Cross-Origin Resource Sharing (CORS) pro komunikaci s dalšími doménami
app.use(cors());

// Použití hlavního routeru pro cesty začínající '/api'
app.use('/api', mainRouter);

// Nastavení složky pro statická soubory
app.use(express.static('../client/src'));

// Middleware pro zpracování nepovolených cest (404 Not Found)
app.use((_, res) => {
    res.send({
        message: 'Not found!'
    });
});

// Navázání spojení s MongoDB databází
mongooseConnection();

// Spuštění serveru na portu 7000
app.listen(7000, (req, res) => {
    console.log('Server up at 7000');
});
