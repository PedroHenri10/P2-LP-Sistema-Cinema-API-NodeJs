import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import filmesRoutes from './src/routes/filmesRoutes.js';
import salasRoutes from './src/routes/salasRoutes.js';
import sessoesRoutes from './src/routes/sessoesRoutes.js';
import vendasRoutes from './src/routes/vendasRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {dbName: 'cinema'})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro na conexão:', err.message));

app.use('/filmes', filmesRoutes);
app.use('/salas', salasRoutes);
app.use('/sessoes', sessoesRoutes);
app.use('/vendas', vendasRoutes);

const PORT =3000;
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});