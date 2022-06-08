const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countryRoute = require('./Countryroutes.js')
const activityRoute = require('./Activityroute.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/countries', countryRoute)
router.use('/post', activityRoute)
module.exports = router;
