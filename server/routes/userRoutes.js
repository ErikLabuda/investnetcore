const express = require('express');

// Importování controlleru pro uživatele
const userController = require('../controllers/user');

// Vytvoření instance routeru pro vytvoření cest
const userRouter = express.Router();

// Definice cest a přiřazení odpovídajících funkcí controlleru
userRouter.route('/register').post(userController.register); // Cesta pro registraci uživatele
userRouter.route('/login').post(userController.login); // Cesta pro přihlášení uživatele
userRouter.route('/changePassword').post(userController.changePassword)

// Exportování routeru pro použití v jiných částech aplikace
module.exports = userRouter;
