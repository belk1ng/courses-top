FROM node:18.17.0-alpine AS builder
WORKDIR /src
COPY . .
RUN rm -rf node_modules .next && npm ci && npm run build

FROM node:18.17.0-alpine
WORKDIR /app
COPY --from=builder /src/package.json package.json
COPY --from=builder /src/.next .next
COPY --from=builder /src/node_modules node_modules
COPY --from=builder /src/assets assets
COPY --from=builder /src/public public
EXPOSE 3000
CMD ["npm", "start"]