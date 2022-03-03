const router = require('express-promise-router')();
const dokterController = require('../controllers/dokter.controller');

router.get('/dokter',dokterController.listAllDokter);

module.exports = router;