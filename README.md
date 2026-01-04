# 🚚 Rocketlog API

API para gerenciamento de **entregas, encomendas e usuários**, desenvolvida com **Node.js moderno**, **TypeScript**, **Express** e **Prisma ORM**.

---

## 🧱 Stack utilizada

- **Node.js** >= 20
- **TypeScript**
- **Express**
- **Prisma ORM (v7)**
- **PostgreSQL**
- **JWT (autenticação)**
- **Zod (validação)**
- **Jest + Supertest (testes)**
- **tsup (build)**

---

## 📂 Estrutura do projeto

```
src/
├── app.ts
├── server.ts
├── env.ts
├── config/
│   └── auth.ts
├── controllers/
├── routes/
├── middlewares/
├── database/
│   └── prisma.ts
├── utils/
├── types/
└── test/
```

---

## ⚙️ Requisitos

- **Node.js >= 20**
- **PostgreSQL**
- **npm** ou **pnpm**

> Recomendado usar `nvm` ou similar para gerenciar versões do Node.

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/rocketlog"
JWT_SECRET="sua_chave_secreta"
PORT=3333
```

---

## 📦 Instalação

```bash
npm install
```

---

## 🧬 Prisma (Banco de dados)

### Criar e aplicar migrations
```bash
npx prisma migrate dev
```

### Gerar Prisma Client (obrigatório no Prisma 7)
```bash
npx prisma generate
```

> ⚠️ No Prisma 7, `migrate` **não** executa `generate` automaticamente.

---

## ▶️ Rodar em desenvolvimento

```bash
npm run dev
```

Servidor disponível em:
```
http://localhost:3333
```

---

## 🧪 Rodar testes

```bash
npm test
```

---

## 🏗 Build para produção

```bash
npm run build
```

### Executar build
```bash
node build/server.js
```

---

## 🔑 Autenticação

A API utiliza **JWT** para autenticação.

- Token enviado via header:
```http
Authorization: Bearer <token>
```

- Middlewares de proteção:
  - `ensureAuthenticated`
  - `verifyUserAuthorization`

---

## 📌 Boas práticas adotadas

- ESM nativo (`"type": "module"`)
- Imports explícitos com extensão `.js`
- Separação clara de responsabilidades
- Build sem bundle (Node resolve dependências)
- Validação de dados com Zod
- Tipagem forte com TypeScript
- Prisma Client gerado fora do `node_modules`

---

## 🚫 Arquivos ignorados pelo Git

```gitignore
node_modules/
build/
.env
src/database/generated/
```

---

## 👨‍💻 Autor

**Jeferson Nascimento**

---

## 📄 Licença

ISC
