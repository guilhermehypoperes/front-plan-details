FROM  node:12.22.0-slim

WORKDIR /app

ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 8080

COPY . .

RUN npm install && npm run build

ENTRYPOINT [ "npm", "run", "start"]