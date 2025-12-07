const express = require('express');
const router = express.Router();
const VendaController = require('../controllers/VendaController');

router.get('/', VendaController.index);             
router.post('/', VendaController.store);            
router.get('/:id', VendaController.show);           
router.delete('/:id', VendaController.delete);     
router.get('/assentos/:sessaoId', VendaController.occupiedSeats); 

module.exports = router;