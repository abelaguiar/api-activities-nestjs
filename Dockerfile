# Etapa 1 - Build
FROM node:18-slim AS builder

# Instala dependências do sistema
RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY prisma ./prisma
COPY src ./src

RUN npm install
RUN npx prisma generate
RUN npm run build

# Etapa 2 - Produção
FROM node:18-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma

ENV NODE_ENV=production

# 🔥 Executa as migrations automaticamente e depois inicia a app
CMD npx prisma migrate deploy && node dist/main
