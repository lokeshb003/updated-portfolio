pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'localhost:5000/new-portfolio:latest'
        DOCKER_IMAGEHUB = 'lokeshb003/new-portfolio:latest'
    }
    stages {
        stage('Checkout SCM') {
            steps {
                checkout ([$class: 'GitSCM', branches: [[$name: '*/master']], userRemoteConfigs: [[$url: 'https://github.com/lokeshb003/updated-portfolio.git']]])
            }
        }
        stage('Install Required Packages') {
            steps {
                sh 'apt update && apt install nodejs npm docker.io -y'
            }
        }
        stage('Install Node modules') {
            steps {
                sh 'npm install --save'
            }
        }
        stage('SonarQube Scanner SAST Test') {
            steps {
                sh 'sonar-scanner -Dsonar.projectKey=Updated-portfolio -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_8e041fc788b7122b5c82b98d6973679a55329c78'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker login -u `${DOCKER_USER}` -p `${DOCKER_PASS}`'
                script {
                    def image_build = docker.build(`${DOCKER_IMAGE}`)
                    image_build.push()
                    def image_dockerhub = docker.build(`${DOCKER_IMAGE_HUB}`)
                    image_dockerhub.push()
                }
            }
        }
        stage('Test the Docker Image') {
            steps {

                sh 'docker run -d test-image-1 -p 3050:3000 `${DOCKER_IMAGE}`'
                sh 'curl localhost:3050'
                sh 'sleep 500'
                sh 'docker stop test-image-1 && docker rm test-image-1' 
            }

        }
        stage('Image Scan with Trivy') {
            steps {
                sh 'docker run --rm aquasec/trivy trivy scan `${DOCKER_IMAGE}`'
            }
        }
        stage('OWASP Dependency Check') {
            steps {
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        stage('Deploy the Container') {
            script {
                def remote = [:]
                remote.name = 'root'
                remote.host = `${SSH_HOST}`
                remote.user = `${SSH_USER}`
                remote.password = `${SSH_PASS}`
                remote.allowAnyHosts = true
                stage('Remote SSH') {
                    sshCommand remote: remote, command: "docker pull lokeshb003/new-portfolio:latest"
                    sshCommand remote: remote, command: "docker run -d --name new-portfolio -p 3070:3000 lokeshb003/new-portfolio:latest"
                }
            }
        }
    }
}