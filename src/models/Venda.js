const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
    filme: {
        type:
        mongoose.Schema.Types.ObjectId,
        ref: 'Sessao',
        required: true
    },
    comprador: {type: String, required: true}, 
    assentos: [{type:Number}],
    valorTotal: {type: Number, required: true},
    dataCompra: {type:Date, default:Date.now}
}, {collection: 'Venda'});

module.exports = mongoose.model('Venda', VendaSchema);