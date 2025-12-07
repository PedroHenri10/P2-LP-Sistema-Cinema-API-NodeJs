const mongoose = require('mongoose');
const Filme = require('../models/Filme');

module.exports = {
    async search(req, res) {
        try {
            const { categoria, classificacao, busca } = req.query;
            const filtro = {};

            if (categoria) filtro.genero = categoria;
            if (classificacao) filtro.classificacao = classificacao;
            if (busca) filtro.titulo = { $regex: busca, $options: 'i' };

            const filmes = await Filme.find(filtro);
            res.json(filmes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

   
    async show(req, res) {
        try {
            if (!mongoose.isValidObjectId(req.params.id)) {
                return res.status(400).json({ error: 'ID inválido' });
            }

            const filme = await Filme.findById(req.params.id);
            
            if (!filme) {
                return res.status(404).json({ error: 'Filme não encontrado' });
            }
            res.json(filme);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

   

    async delete(req, res) {
        try {
            if (!mongoose.isValidObjectId(req.params.id)) {
                return res.status(400).json({ error: 'ID inválido' });
            }

            const filme = await Filme.findByIdAndDelete(req.params.id);

            if (!filme) {
                return res.status(404).json({ error: 'Filme não encontrado' });
            }
            res.json({ ok: true });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};