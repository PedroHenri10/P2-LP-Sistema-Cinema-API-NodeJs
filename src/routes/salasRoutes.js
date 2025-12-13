import express from 'express';
import SalaController from '../controller/salaController.js';
 
const router = express.Router();
 
router.get('/', SalaController.search);
router.post('/', SalaController.store);
router.put('/:id', SalaController.update);
 
export default router;