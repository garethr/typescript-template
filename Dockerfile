FROM node:lts-buster AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
ADD . .
RUN npm run linux


FROM gcr.io/distroless/cc-debian10
COPY --from=build /app/change /change
CMD ["/change"]
