import mongoose from 'mongoose';
 
const VendaSchema = new mongoose.Schema({
    sessao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sessao',
        required: true
    },
    comprador: { type: String, required: true },
    assentos: [{ type: Number }],
    valorTotal: { type: Number, required: true },
    dataCompra: { type: Date, default: Date.now }
}, { collection: 'venda' });
 
export default mongoose.model('Venda', VendaSchema);