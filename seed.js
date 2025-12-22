import 'dotenv/config';
import mongoose from 'mongoose';

import Filme from './src/models/filme.js';
import Sala from './src/models/Sala.js';
import Sessao from './src/models/Sessao.js';
import Venda from './src/models/Venda.js';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/cinema';


const filmes = [
  { "_id": "64c8b6f5a3d4e13b8a000001", "titulo": "Avatar", "genero": "Aventura", "duracao": 162, "classificacao": "12", "sinopse": "" },
  { "_id": "64c8b6f5a3d4e13b8a000002", "titulo": "O Poderoso Chefão", "genero": "Drama", "duracao": 175, "classificacao": "16", "sinopse": "" },
  { "_id": "64c8b6f5a3d4e13b8a000003", "titulo": "Filme do Pelé", "genero": "Biografia", "duracao": 120, "classificacao": "10", "sinopse": "" },
  { "_id": "64c8b6f5a3d4e13b8a000004", "titulo": "Zootopia 2", "genero": "Animação", "duracao": 105, "classificacao": "Livre", "sinopse": "" },
  { "_id": "64c8b6f5a3d4e13b8a000005", "titulo": "Five at Night: Freddy's 2", "genero": "Terror", "duracao": 95, "classificacao": "16", "sinopse": "" },
  { "_id": "64c8b6f5a3d4e13b8a000006", "titulo": "Quarteto Fantástico", "genero": "Ação", "duracao": 110, "classificacao": "12", "sinopse": "" },
  { "_id": "64c8b6f5a3d4e13b8a000007", "titulo": "Wicked for Good", "genero": "Fantasia", "duracao": 130, "classificacao": "14", "sinopse": "" },
  { "_id": "64c8b6f5a3d4e13b8a000008", "titulo": "Anabelle", "genero": "Terror", "duracao": 100, "classificacao": "16", "sinopse": "" }
];

const salas = [
  { "_id": "74c8b6f5a3d4e13b8b000001", "nome": "Sala VIP", "capacidade": 30, "ativa": true },
  { "_id": "74c8b6f5a3d4e13b8b000002", "nome": "Sala 1", "capacidade": 50, "ativa": true },
  { "_id": "74c8b6f5a3d4e13b8b000003", "nome": "Sala 2", "capacidade": 50, "ativa": true },
  { "_id": "74c8b6f5a3d4e13b8b000004", "nome": "Sala 3", "capacidade": 50, "ativa": false }
];

const sessoes = [
  { "_id": "84c8b6f5a3d4e13b8c000001", "filme": "64c8b6f5a3d4e13b8a000001", "sala": "74c8b6f5a3d4e13b8b000001", "data": "2025-12-09", "horario": "14:00", "preco": 35 },
  { "_id": "84c8b6f5a3d4e13b8c000002", "filme": "64c8b6f5a3d4e13b8a000002", "sala": "74c8b6f5a3d4e13b8b000002", "data": "2025-12-09", "horario": "17:00", "preco": 30 },
  { "_id": "84c8b6f5a3d4e13b8c000003", "filme": "64c8b6f5a3d4e13b8a000004", "sala": "74c8b6f5a3d4e13b8b000003", "data": "2025-12-09", "horario": "20:00", "preco": 28 },
  { "_id": "84c8b6f5a3d4e13b8c000004", "filme": "64c8b6f5a3d4e13b8a000005", "sala": "74c8b6f5a3d4e13b8b000002", "data": "2025-12-09", "horario": "22:00", "preco": 32 },
  { "_id": "84c8b6f5a3d4e13b8c000005", "filme": "64c8b6f5a3d4e13b8a000006", "sala": "74c8b6f5a3d4e13b8b000001", "data": "2025-12-10", "horario": "13:00", "preco": 27 },
  { "_id": "84c8b6f5a3d4e13b8c000006", "filme": "64c8b6f5a3d4e13b8a000007", "sala": "74c8b6f5a3d4e13b8b000003", "data": "2025-12-10", "horario": "16:00", "preco": 29 },
  { "_id": "84c8b6f5a3d4e13b8c000007", "filme": "64c8b6f5a3d4e13b8a000008", "sala": "74c8b6f5a3d4e13b8b000002", "data": "2025-12-10", "horario": "19:00", "preco": 31 },
  { "_id": "84c8b6f5a3d4e13b8c000008", "filme": "64c8b6f5a3d4e13b8a000001", "sala": "74c8b6f5a3d4e13b8b000003", "data": "2025-12-10", "horario": "21:30", "preco": 35 },
  { "_id": "84c8b6f5a3d4e13b8c000009", "filme": "64c8b6f5a3d4e13b8a000002", "sala": "74c8b6f5a3d4e13b8b000001", "data": "2025-12-11", "horario": "12:00", "preco": 30 },
  { "_id": "84c8b6f5a3d4e13b8c00000a", "filme": "64c8b6f5a3d4e13b8a000004", "sala": "74c8b6f5a3d4e13b8b000003", "data": "2025-12-11", "horario": "15:00", "preco": 28 },
  { "_id": "84c8b6f5a3d4e13b8c00000b", "filme": "64c8b6f5a3d4e13b8a000005", "sala": "74c8b6f5a3d4e13b8b000002", "data": "2025-12-11", "horario": "18:00", "preco": 32 },
  { "_id": "84c8b6f5a3d4e13b8c00000c", "filme": "64c8b6f5a3d4e13b8a000006", "sala": "74c8b6f5a3d4e13b8b000001", "data": "2025-12-11", "horario": "20:30", "preco": 27 }
];

const vendas = [
  { "_id": "94c8b6f5a3d4e13b8d000001", "sessao": "84c8b6f5a3d4e13b8c000001", "comprador": "Cliente 1",  "assentos": [1], "valorTotal": 35, "dataCompra": "2025-12-01T10:00:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000002", "sessao": "84c8b6f5a3d4e13b8c000001", "comprador": "Cliente 2",  "assentos": [2,3], "valorTotal": 70, "dataCompra": "2025-12-02T12:30:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000003", "sessao": "84c8b6f5a3d4e13b8c000002", "comprador": "Cliente 3",  "assentos": [10], "valorTotal": 30, "dataCompra": "2025-12-03T11:15:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000004", "sessao": "84c8b6f5a3d4e13b8c000003", "comprador": "Cliente 4",  "assentos": [5,6,7], "valorTotal": 84, "dataCompra": "2025-12-04T09:20:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000005", "sessao": "84c8b6f5a3d4e13b8c000004", "comprador": "Cliente 5",  "assentos": [15], "valorTotal": 32, "dataCompra": "2025-12-04T17:00:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000006", "sessao": "84c8b6f5a3d4e13b8c000005", "comprador": "Cliente 6",  "assentos": [3], "valorTotal": 27, "dataCompra": "2025-12-05T14:00:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000007", "sessao": "84c8b6f5a3d4e13b8c000006", "comprador": "Cliente 7",  "assentos": [4,5], "valorTotal": 58, "dataCompra": "2025-12-05T14:20:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000008", "sessao": "84c8b6f5a3d4e13b8c000007", "comprador": "Cliente 8",  "assentos": [20], "valorTotal": 31, "dataCompra": "2025-12-06T18:00:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d000009", "sessao": "84c8b6f5a3d4e13b8c000008", "comprador": "Cliente 9",  "assentos": [12,13], "valorTotal": 70, "dataCompra": "2025-12-06T19:30:00Z" },
  { "_id": "94c8b6f5a3d4e13b8d00000a", "sessao": "84c8b6f5a3d4e13b8c000009", "comprador": "Cliente 10", "assentos": [7], "valorTotal": 30, "dataCompra": "2025-12-07T08:15:00Z" }
];

async function seed() {
    try {
        await mongoose.connect(mongoUri);
        console.log('🔌 Conectado ao MongoDB para seeding...');

        const countFilmes = await Filme.countDocuments();
        if (countFilmes === 0) {
            await Filme.insertMany(filmes);
            console.log('Filmes inseridos!');
        } else {
            console.log('ℹFilmes já existem. Pulando...');
        }

        const countSalas = await Sala.countDocuments();
        if (countSalas === 0) {
            await Sala.insertMany(salas);
            console.log('Salas inseridas!');
        } else {
            console.log('ℹSalas já existem. Pulando...');
        }

        const countSessoes = await Sessao.countDocuments();
        if (countSessoes === 0) {
            await Sessao.insertMany(sessoes);
            console.log('Sessões inseridas!');
        } else {
            console.log('ℹSessões já existem. Pulando...');
        }

        const countVendas = await Venda.countDocuments();
        if (countVendas === 0) {
            await Venda.insertMany(vendas);
            console.log('Vendas inseridas!');
        } else {
            console.log('ℹVendas já existem. Pulando...');
        }

        console.log('Processo finalizado.');
        process.exit(0);

    } catch (error) {
        console.error('Erro no seed:', error);
        process.exit(1);
    }
}

seed();