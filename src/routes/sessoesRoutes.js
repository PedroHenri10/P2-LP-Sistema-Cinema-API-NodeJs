const express = require('express');
const router = express.Router();
const SessaoController = require('../controllers/SessaoController');

router.get('/', SessaoController.index);     
router.post('/', SessaoController.store);    
router.put('/:id', SessaoController.update); 
router.delete('/:id', SessaoController.destroy); 

module.exports = router;