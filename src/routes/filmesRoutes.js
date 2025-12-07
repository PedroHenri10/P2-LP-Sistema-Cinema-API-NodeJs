const express = require('express');
const router = express.Router();
const FilmeController = require('../controllers/FilmeController');

router.get('/', FilmeController.search);          
router.post('/', FilmeController.store);         
router.get('/:id', FilmeController.show);        
router.put('/:id', FilmeController.update);      
router.delete('/:id', FilmeController.delete);  

module.exports = router;