import express from 'express';
import VendaController from '../controller/VendaController.js';
 
const router = express.Router();
 
router.get('/', VendaController.search);
router.post('/', VendaController.store);
router.get('/:id', VendaController.show);
router.delete('/:id', VendaController.destroy);
router.get('/assentos/:sessaoId', VendaController.listOcupados);
 
export default router;