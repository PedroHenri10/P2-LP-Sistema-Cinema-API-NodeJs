# CineManager - API

Este é o **Backend** do sistema de gerenciamento de cinema. Trata-se de uma API RESTful construída com Node.js e Express, responsável por persistir os dados no MongoDB e fornecer endpoints para o frontend.

## 🛠️ Tecnologias Utilizadas

*   **Node.js:** Ambiente de execução JavaScript.
*   **Express (v5.2.1):** Framework web para construção da API.
*   **MongoDB & Mongoose (v9.0.1):** Banco de dados NoSQL e ODM para modelagem de dados.
*   **Dotenv:** Gerenciamento de variáveis de ambiente.
*   **Cors:** Middleware para permitir requisições de origens diferentes (necessário para comunicar com o Frontend).


## ⚙️ Pré-requisitos

*   [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada).
*   Uma instância do [MongoDB](https://www.mongodb.com/) rodando (localmente ou MongoDB Atlas).

## 🚀 Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/PedroHenri10/P2-LP-Sistema-Cinema-API-NodeJs
    cd P2-LP-Sistema-Cinema-API-NodeJs-main
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração do Ambiente:**
    Crie um arquivo `.env` na raiz do projeto e configure a conexão com o banco de dados (exemplo):
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster_URL.exemplo.mongodb.net/cinema?retryWrites=true&w=majority
    PORT=3000
    ```

4.  **Popular o Banco de Dados (Opcional):**
    O projeto possui um script de "seed" para criar dados iniciais (salas, filmes padrão, etc).
    ```bash
    npm run seed
    ```

5.  **Rodar a API:**
    ```bash
    npm start
    ```
    *O servidor iniciará (geralmente na porta 3000 ou a definida no .env).*

## 📡 Documentação de Rotas

Abaixo estão os endpoints disponíveis conforme implementado nos Controllers.

### 🎬 Filmes (`/filmes` ou `/movies`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Lista todos os filmes (index). |
| `GET` | `/generos` | Retorna a lista de gêneros disponíveis. |
| `GET` | `/:id` | Exibe detalhes de um filme específico. |
| `POST` | `/` | Cadastra um novo filme. |
| `PUT` | `/:id` | Atualiza dados de um filme. |
| `DELETE` | `/:id` | Remove um filme. |

### 💺 Salas (`/salas` ou `/rooms`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Busca/Lista as salas cadastradas. |
| `POST` | `/` | Cadastra uma nova sala. |
| `PUT` | `/:id` | Atualiza uma sala existente. |

### 🕒 Sessões (`/sessoes` ou `/sessions`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/search` | Busca sessões (pode aceitar filtros via query params). |
| `POST` | `/` | Cria uma nova sessão. |
| `PUT` | `/:id` | Atualiza dados da sessão. |
| `DELETE` | `/:id` | Remove uma sessão. |

### 🎟️ Vendas (`/vendas` ou `/sales`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Busca histórico de vendas. |
| `GET` | `/:id` | Detalhes de uma venda específica. |
| `POST` | `/` | Realiza uma nova venda. |
| `DELETE` | `/:id` | Cancela/Deleta uma venda. |
| `GET` | `/assentos/:sessaoId` | Lista os assentos ocupados de uma sessão específica. |

## 📝 Scripts Disponíveis

*   `npm start`: Inicia o servidor com `node server.js`.
*   `npm run seed`: Executa o script `seed.js` para popular o banco.

Autor

💻 Pedro Henrique Nunes

🌐 https://www.linkedin.com/in/p-henrique-nunes

✉️ dinhonoliver@gmail.com
