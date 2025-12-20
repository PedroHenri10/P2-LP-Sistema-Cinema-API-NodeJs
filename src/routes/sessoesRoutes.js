import express from 'express';
import SessaoController from '../controller/SessaoController.js';
 
const router = express.Router();
 
router.get('/search', SessaoController.search);
router.post('/', SessaoController.store);
router.put('/:id', SessaoController.update);
router.delete('/:id', SessaoController.destroy);
 
export default router;