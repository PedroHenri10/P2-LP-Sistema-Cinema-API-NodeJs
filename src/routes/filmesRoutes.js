import express from 'express';
import FilmeController from '../controller/FilmeController.js'; 
 
const router = express.Router();
 
router.get('/', FilmeController.index);
router.get('/generos', FilmeController.listarGeneros);
router.post('/', FilmeController.store);
router.get('/:id', FilmeController.show);
router.put('/:id', FilmeController.update);
router.delete('/:id', FilmeController.destroy);
 
export default router;