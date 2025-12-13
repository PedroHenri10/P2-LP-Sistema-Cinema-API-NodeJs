import mongoose from 'mongoose';
import Sessao from '../models/Sessao.js';
 
export default {
    async search(req, res) {
        try {
            const { filmeId, salaId, data } = req.query;
            const filtro = {};
            if (filmeId) filtro.filme = filmeId;
            if (salaId) filtro.sala = salaId;
            if (data) filtro.data = data;
 
            const sessoes = await Sessao.find(filtro)
                .populate('filme')
                .populate('sala');
            res.json(sessoes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async store(req, res) {
        try {
            const sessao = await Sessao.create(req.body);
            res.status(201).json(sessao);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
 
    async update(req, res) {
        try {
if (!mongoose.isValidObjectId(req.params.id)) {
                return res.status(400).json({ error: 'ID inválido' });
            }
const sessao = await Sessao.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!sessao) return res.status(404).json({ error: 'Sessão não encontrada' });
            res.json(sessao);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async destroy(req, res) { 
        try {
if (!mongoose.isValidObjectId(req.params.id)) {
                return res.status(400).json({ error: 'ID inválido' });
            }
const sessao = await Sessao.findByIdAndDelete(req.params.id);
            if (!sessao) return res.status(404).json({ error: 'Sessão não encontrada' });
            res.json({ ok: true });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};