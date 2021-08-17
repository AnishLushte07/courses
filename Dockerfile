FROM node:14-alpine as builder
ENV NODE_ENV production

# USER node

WORKDIR /opt/msvc-courses

COPY . /opt/msvc-courses

RUN npm ci && npm run build 
    # && npm prune --production

# ---

FROM node:14-alpine
RUN apk add dumb-init

ENV NODE_ENV production

# USER node

WORKDIR /opt/msvc-courses

COPY --from=builder /opt/msvc-courses/package*.json /opt/msvc-courses/
COPY --from=builder /opt/msvc-courses/node_modules/ /opt/msvc-courses/node_modules/
COPY --from=builder /opt/msvc-courses/dist/ /opt/msvc-courses/dist/

CMD ["dumb-init", "node", "dist/main.js"]
