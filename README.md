# Contact Manager - 3-Tier Application Sandbox

A classic 3-tier contact management application featuring a React front-end, Node.js/Express back-end, and MongoDB. This project serves as a practical sandbox for learning and implementing modern DevOps practices, including containerization, CI/CD, and cloud orchestration.

## 🏗️ Architecture

- **Frontend:** React.js application
- **Backend:** Node.js server with Express.js REST API
- **Database:** MongoDB

## 🚀 How to Run Locally (Developer Mode)

### Prerequisites
- Node.js installed
- MongoDB running locally (or providing a connection URI)

### 1. Database
Ensure MongoDB is running locally on port `27017` or have a MongoDB connection string ready.

### 2. Backend
Navigate to the `backend` directory, install dependencies, and run the server:
```bash
cd backend
npm install
npm start
```
The server will start on `http://localhost:5000`. 
*(Note: To connect to a custom database, run with `MONGODB_URI=<your-uri> npm start`)*

### 3. Frontend
Open a new terminal, navigate to the `frontend` directory, install dependencies, and start the React app:
```bash
cd frontend
npm install
npm start
```
The client will start on `http://localhost:3000`.

---

## 🐳 Running with Docker

Since the project has been Dockerized, you can manually build and run the containers using the standard Docker commands.

### 1. Build the Images
```bash
# Build Database Image
cd database
docker build -t contact-app-database .
cd ..

# Build Backend Image
cd backend
docker build -t contact-app-backend .
cd ..

# Build Frontend Image
cd frontend
docker build -t contact-app-frontend .
cd ..
```

### 2. Run the Containers
*Note: We will automate this using `docker-compose` later!*
```bash
# Create a custom bridge network so containers can communicate
docker network create devops-network

# 1. Start MongoDB
docker run -d --name mongo --network devops-network -p 27017:27017 contact-app-database

# 2. Start Backend
docker run -d --name backend --network devops-network -p 5000:5000 -e MONGODB_URI=mongodb://mongo:27017/devops_project contact-app-backend

# 3. Start Frontend
docker run -d --name frontend --network devops-network -p 80:80 contact-app-frontend
```
You can now access the app at `http://localhost`.

---

## 🛠️ DevOps Roadmap

*(This section will be updated as DevOps components are integrated into the repository)*

- [x] **Dockerization**: Containerize frontend, backend, and database using Dockerfiles.
- [ ] **Docker Compose**: Orchestrate the 3-tier stack locally using `docker-compose.yml`.
- [ ] **Continuous Integration (Jenkins)**: Automate code testing and Docker image builds.
- [ ] **Kubernetes (K8s)**: Deploy to a cluster using Deployments, Services, ConfigMaps, and Secrets.
- [ ] **Cloud Platform (AWS)**: Host infrastructure in the cloud using managed services (EKS, EC2, etc.).

---
*Developed and maintained as a DevOps learning project.*
