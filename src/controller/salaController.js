import mongoose from 'mongoose';
import Sala from '../models/Sala.js'; 
 
export default {
    async search(req, res) {
        try {
            const salas = await Sala.find();
            res.json(salas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async store(req, res) {
        try {
            const sala = await Sala.create(req.body);
            res.status(201).json(sala);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
 
    async update(req, res) {
        try {
if (!mongoose.isValidObjectId(req.params.id)) {
                return res.status(400).json({ error: 'ID inválido' });
            }
            const sala = await Sala.findByIdAndUpdate(
req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!sala) {
                return res.status(404).json({ error: 'Sala não encontrada' });
            }
            res.json(sala);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};