const router = require('express-promise-router')();
const pasienController = require('../controllers/pasien.controller');

router.get('/pasien',pasienController.listAllPasien);
router.get('/pasien/:id',pasienController.findPasienbyID);
router.post('/pasien', pasienController.createPasien);
router.put('/pasien/:id',pasienController.updatePasienbyID);
router.delete('/pasien/:id',pasienController.deletePasienbyID);

module.exports = router;