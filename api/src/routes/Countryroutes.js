const express = require ('express');
const router = express.Router();
const {getCountryByName} = require ('../controllers/Country.js')
const {getIdCountry} = require ('../controllers/Country.js')


router.get('/' , getCountryByName)

router.get('/:id' , getIdCountry)


module.exports = router;