import mongoose from 'mongoose';
 
const FilmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: { type: String, required: true },
    duracao: { type: Number, required: true },
    classificacao: { type: String, required: true },
    sinopse: { type: String }
}, { collection: 'Filme' });
 
export default mongoose.model('Filme', FilmeSchema);