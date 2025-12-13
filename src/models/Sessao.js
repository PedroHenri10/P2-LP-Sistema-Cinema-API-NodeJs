import mongoose from 'mongoose';
 
const SessaoSchema = new mongoose.Schema({
    filme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Filme', 
        required: true
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sala',
        required: true
    },
    data: { type: String, required: true },
    horario: { type: String, required: true },
    preco: { type: Number, required: true }
}, { collection: 'sessao' });
 
export default mongoose.model('Sessao', SessaoSchema);