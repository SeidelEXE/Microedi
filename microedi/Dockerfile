FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:1.27-alpine
RUN rm -rf ./*

COPY --from=build /app/dist ./

EXPOSE 80
