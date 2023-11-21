const { Router: expressRouter } = require('express');

// Vytvoření instance routeru pro vytvoření cest
const router = expressRouter();

// Importování a použití rout pro autentizaci (přihlášení/odhlášení)
const authRouter = require('./userRoutes');
router.use('/auth', authRouter); // Všechny cesty připojené pod '/auth'

// Exportování routeru pro použití v aplikaci
module.exports = router;
