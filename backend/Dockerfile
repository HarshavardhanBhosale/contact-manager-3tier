FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV MONGODB_URI=mongodb://mongo:27017/devops_project
CMD ["node","server.js"]