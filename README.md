# 🚀 Fullstack Resource Management System

Aplicação fullstack para gerenciamento de recursos com autenticação JWT, dashboard analítico e controle de acesso por perfil.

---

## 🧠 Tecnologias utilizadas

### 🔹 Frontend
- React
- TypeScript
- Tailwind CSS
- Vite

### 🔹 Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT (autenticação)

---

## 🔐 Funcionalidades

- Cadastro de usuários
- Login com autenticação JWT
- Rotas protegidas
- Controle de acesso por perfil (ADMIN, EMPLOYEE, SECURITY)
- Dashboard com estatísticas
- CRUD de recursos

---

## 📊 Dashboard

- Total de recursos
- Recursos ativos
- Recursos inativos

---

## ⚙️ Como rodar o projeto

### 🔹 Backend

```bash
cd Backend
npm install
npx prisma migrate dev
npm run dev
