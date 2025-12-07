const express = require('express');
const router = express.Router();
const SalaController = require('../controllers/SalaController');

router.get('/', SalaController.index);
router.post('/', SalaController.store);
router.put('/:id', SalaController.updateStatus); 

module.exports = router;