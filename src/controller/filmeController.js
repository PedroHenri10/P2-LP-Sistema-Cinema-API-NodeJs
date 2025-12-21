import mongoose from 'mongoose';
import Filme from '../models/Filme.js'; 
 
export default {
    async index(req, res) {
        try {
            const { categoria, classificacao, busca } = req.query;
            const filtro = {};
 
            if (categoria) filtro.genero = categoria;
            if (classificacao) filtro.classificacao = classificacao;
            if (busca) filtro.titulo = { $regex: busca, $options: 'i' };
 
            const filmes = await Filme.find(filtro);
            res.json(filmes);
        } catch (err) {
            console.error('Erro ao buscar filmes:', err); 
            res.status(500).json({ error: err.message });
        }
    },

    async listarGeneros(req, res) {
        try {
            const generos = await Filme.distinct('genero');
            res.json(generos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async store(req, res) {
        try {
            const filme = await Filme.create(req.body);
            res.status(201).json(filme);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
 
    async show(req, res) {
        try {
if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ error: 'ID inválido' });
const filme = await Filme.findById(req.params.id);
            if (!filme) return res.status(404).json({ error: 'Filme não encontrado' });
            res.json(filme);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async update(req, res) {
        try {
if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ error: 'ID inválido' });
const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(filme);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
 
    async destroy(req, res) {
        try {
if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ error: 'ID inválido' });
await Filme.findByIdAndDelete(req.params.id);
            res.json({ ok: true });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};