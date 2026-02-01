# API REST Escola - Node.js + Sequelize

API REST profissional para gerenciamento de alunos, usuários e fotos. Desenvolvida com foco em **Clean Code**, arquitetura escalável e segurança.

## 🚀 Principais Tecnologias

- **Node.js + Express**: Core do projeto.
- **Sequelize ORM**: Integridade de dados e facilidade no versionamento via Migrations.
- **SQLite (Default) / MariaDB / MySQL**: Flexibilidade na escolha do banco de dados.
- **JWT (JSON Web Token)**: Autenticação stateless robusta.
- **Sucrase**: Transpilação de código moderna (ES6+) com foco em velocidade.
- **Segurança**:
  - `helmet`: Proteção de headers HTTP.
  - `cors`: Gerenciamento de acessos externos.
  - `express-rate-limit`: Proteção contra ataques de força bruta (desativado no modo desenvolvimento).
  - `morgan`: Logger de requisições em tempo real.

## 📋 Funcionalidades

- **Autenticação JWT**: Sistema de login com geração e validação de tokens.
- **Gestão de Alunos**: CRUD completo com validação de dados via Sequelize.
- **Gestão de Usuários**: Cadastro e gerenciamento de perfis administrativos.
- **Avatar e Fotos**:
  - Upload de imagens integrado.
  - Campos virtuais para geração automática de URLs de acesso.
  - **Auto-Cleanup**: Ao deletar um registro ou atualizar uma foto, o arquivo antigo é removido fisicamente do disco para economizar espaço.

## 🛠️ Como Executar (Zero Config)

1. **Clone o repositório e instale as dependências**:

   ```bash
   git clone https://github.com/seu-usuario/api_rest.git
   cd api_rest
   npm install
   ```

2. **Prepare o ambiente**:

   ```bash
   cp .env.example .env
   ```

   _O projeto já vem pré-configurado com **SQLite** para que você possa testar sem instalar nenhum banco de dados._

3. **Crie o banco e popule com dados de teste**:

   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

4. **Inicie o servidor**:
   ```bash
   npm run dev
   ```
   _Acesse em: `http://localhost:3001`_

## 📍 Principais Endpoints

- `GET /`: Documentação interativa dos endpoints.
- `POST /tokens/`: Login de usuário.
- `GET /alunos/`: Lista todos os alunos (Público).
- `POST /alunos/`: Cria novo aluno (Requer Login).
- `POST /fotos/`: Upload de foto (Requer Login).

## 📱 Cliente Frontend

> **App React Consumer**: Consulte [danitsdev/escola_app](https://github.com/danitsdev/escola_app) para a aplicação frontend que consome esta API.

---

Desenvolvido por **Danits** 🚀
