const mongoose = require('mongoose');

const SalaSchema = new mongoose.Schema({
    nome: { type: String, required: true }, 
    capacidade: { type: Number, required: true }, 
    ativa: { type: Boolean, default: true } 
}, {colletion: 'Sala'}
);

module.exports = mongoose.model('Sala', SalaSchema);