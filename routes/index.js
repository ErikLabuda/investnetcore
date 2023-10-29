const {Router: expressRouter} = require('express')
const router = expressRouter()

//routy tykajuce sa prihlasenia a odhlasenia
const authRouter = require('./userRoutes')
router.use('/auth', authRouter)

module.exports = router