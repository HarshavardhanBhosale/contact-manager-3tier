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

### 1. Using Docker Compose (Recommended)

You can easily spin up the entire 3-tier application stack using `docker-compose`. This uses the provided `docker-compose.yaml` file to set up the networking and volumes automatically:

```bash
docker-compose up -d
```

Once running, the application will be accessible at `http://localhost`.

To stop the containers and remove the network, run:
```bash
docker-compose down
```

### 2. Manual Docker Build & Run (Alternative)

If you prefer to manually build and run the containers using standard Docker commands:

#### Build the Images
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

#### Run the Containers
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

## ⚙️ CI/CD Pipeline (Jenkins)

This project includes a `jenkinsfile` defining a declarative CI/CD pipeline. The pipeline automates the following stages:
1. **Code Clone:** Pulls the latest code from the GitHub repository (`main` branch).
2. **Building Docker Images:** Builds Docker images for the frontend, backend, and database tiers.
3. **Pushing to DockerHub:** Authenticates and pushes the newly built images to DockerHub.
4. **Running Containers:** Deploys the application using `docker-compose up -d`.

**Prerequisites for Jenkins:**
- A Jenkins server configured with Docker and Git.
- DockerHub credentials stored in Jenkins with the ID `dockerhub-creds`.

---

## 🛠️ DevOps Roadmap

*(This section will be updated as DevOps components are integrated into the repository)*

- [x] **Dockerization**: Containerize frontend, backend, and database using Dockerfiles.
- [x] **Docker Compose**: Orchestrate the 3-tier stack locally using `docker-compose.yaml`.
- [x] **Continuous Integration (Jenkins)**: Automate code testing and Docker image builds.
- [ ] **Kubernetes (K8s)**: Deploy to a cluster using Deployments, Services, ConfigMaps, and Secrets.
- [x] **Cloud Platform (AWS)**: Host infrastructure in the cloud using managed services (EKS, EC2, etc.).

---
*Developed and maintained as a DevOps learning project.*

---

## 📦 Deploy to EC2 (Ubuntu)

The project can be deployed to an Ubuntu EC2 instance using the following steps:

1. **Provision an EC2 instance** (Ubuntu 22.04 recommended) and open ports 22 (SSH), 80 (HTTP) and 5000 (backend) in the security group.
2. **Install Docker and Docker Compose** on the instance:
   ```bash
   sudo apt update
   sudo apt install -y docker.io docker-compose
   sudo usermod -aG docker $USER
   ```
3. **Clone the repository** and run the compose file:
   ```bash
   git clone <repo-url>
   cd "devops project"
   docker-compose up -d
   ```
4. The application will be reachable at `http://<ec2-public-ip>`.

## 🛠️ Jenkins Pipeline UI

Below is a screenshot of the Jenkins pipeline view for this project.

![Jenkins Pipeline UI](assets/jenkins_pipeline.png)

## 📸 Application UI Screenshots

1. **Frontend Home Page**  
   ![App UI 1](assets/app_ui_1.png)

2. **Backend Dashboard**  
   ![App UI 2](assets/app_ui_2.png)

3. **Database Admin (Mongo Express)**  
   ![App UI 3](assets/app_ui_3.png)

*Place the above image files in the `assets/` directory of the repository.*
