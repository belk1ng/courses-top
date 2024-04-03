FROM node:18.17.0-alpine AS builder
WORKDIR /src
COPY . .
RUN npm ci && npm run build

FROM node:18.17.0-alpine
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /src/package.json package.json
COPY --from=builder /src/.next .next
COPY --from=builder /src/node_modules node_modules
COPY --from=builder /src/assets assets
COPY --from=builder /src/public public
COPY --from=builder /src/next.config.mjs next.config.mjs

ENV PORT 3000
EXPOSE 3000
CMD ["npm", "start"]