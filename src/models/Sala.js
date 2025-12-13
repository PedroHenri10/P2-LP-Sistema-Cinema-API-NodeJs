import mongoose from 'mongoose';
 
const SalaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    capacidade: { type: Number, required: true },
    ativa: { type: Boolean, default: true }
}, { collection: 'sala' }); 
 
export default mongoose.model('Sala', SalaSchema);