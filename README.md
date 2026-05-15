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

## 🛠️ DevOps Roadmap

*(This section will be updated as DevOps components are integrated into the repository)*

- [ ] **Dockerization**: Containerize frontend and backend using Dockerfiles.
- [ ] **Docker Compose**: Orchestrate the 3-tier stack locally using `docker-compose.yml`.
- [ ] **Continuous Integration (Jenkins)**: Automate code testing and Docker image builds.
- [ ] **Kubernetes (K8s)**: Deploy to a cluster using Deployments, Services, ConfigMaps, and Secrets.
- [ ] **Cloud Platform (AWS)**: Host infrastructure in the cloud using managed services (EKS, EC2, etc.).

---
*Developed and maintained as a DevOps learning project.*
