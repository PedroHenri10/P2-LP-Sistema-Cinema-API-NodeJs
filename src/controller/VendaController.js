import mongoose from 'mongoose';
import Venda from '../models/Venda.js';
import Sessao from '../models/Sessao.js'; 
 
export default {
    async search(req, res) {
        try {
            const vendas = await Venda.find().populate('sessao');
            res.json(vendas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async store(req, res) {
        try {
            const { sessao, assentos } = req.body;
            
            const vendasExistentes = await Venda.find({ sessao: sessao });
            let ocupados = [];
            vendasExistentes.forEach(v => {
                ocupados = [...ocupados, ...v.assentos];
            });
 
            const temErro = assentos.some(lugar => ocupados.includes(lugar));
            if (temErro) {
                return res.status(400).json({ error: 'Assento já ocupado' });
            }
 
            const novaVenda = await Venda.create(req.body);
            res.status(201).json(novaVenda);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
 
    async show(req, res) {
        try {
if (!mongoose.isValidObjectId(req.params.id)) {
                return res.status(400).json({ error: 'ID inválido' });
            }
const venda = await Venda.findById(req.params.id)
                .populate({
                    path: 'sessao',
                    populate: { path: 'filme sala' }
                });
            if (!venda) {
                return res.status(404).json({ error: 'Venda não encontrada' });
            }
            res.json(venda);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async destroy(req, res) {
        try {
if (!mongoose.isValidObjectId(req.params.id)) {
                return res.status(400).json({ error: 'ID inválido' });
            }
const venda = await Venda.findByIdAndDelete(req.params.id);
            if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
            res.json({ ok: true });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async listOcupados(req, res) {
        try {
            const { sessaoId } = req.params;
            const vendas = await Venda.find({ sessao: sessaoId });
            let ocupados = [];
            vendas.forEach(v => {
                ocupados = [...ocupados, ...v.assentos];
            });
            res.json(ocupados);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};