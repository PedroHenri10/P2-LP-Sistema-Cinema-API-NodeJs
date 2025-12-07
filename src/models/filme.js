const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: { type: String, required: true }, 
    duracao: { type: Number, required: true }, 
    classificacao: { type: String, required: true }, 
    sinopse: { type: String },
    //poster: { type: String } 
}, {collection: 'Filmes'}
);

module.exports = mongoose.model('Filme', FilmeSchema);