import 'dotenv/config'; 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
 
import filmesRoutes from './src/routes/filmesRoutes.js';
import salasRoutes from './src/routes/salasRoutes.js';
import sessoesRoutes from './src/routes/sessoesRoutes.js';
import vendasRoutes from './src/routes/vendasRoutes.js';
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
const mongoUri = process.env.MONGO_URI;
 
mongoose.connect(mongoUri)
    .then(() => console.log('Conectado ao MongoDB com sucesso!'))
    .catch((err) => console.error('Erro na conexão com o Banco:', err));
 
app.use('/filmes', filmesRoutes);
app.use('/salas', salasRoutes);
app.use('/sessoes', sessoesRoutes);
app.use('/vendas', vendasRoutes);
 
app.get('/', (req, res) => {
    res.json({ msg: 'API Cinema Rodando!' });
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`)); 