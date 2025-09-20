
FROM node:22-alpine3.19 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build 


FROM node:22-alpine3.19 AS production

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist-frontend ./dist-frontend 
COPY --from=builder /app/node_modules ./node_modules



EXPOSE 3000
CMD ["node", "dist/main"]