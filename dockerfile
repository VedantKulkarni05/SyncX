# FROM node:20-alpine

# COPY ./Backend .

# RUN npm install

# CMD ["node", "server.js"]



# Multi-stage build
# STAGE-I

FROM node:20-alpine AS frontned-build

COPY ./Frontend /app

WORKDIR /app

RUN npm install
RUN npm run build


# STAGE-II
FROM node:20-alpine AS backend-build

COPY ./Backend /app

WORKDIR /app

RUN npm install

COPY --from=frontned-build /app/dist /app/public

CMD [ "node", "server.js" ]