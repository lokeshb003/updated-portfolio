pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'localhost:5000/new-portfolio:latest'
        DOCKER_IMAGE_HUB = 'lokeshb003/new-portfolio:latest'
        SSH_USER = 'root'
    }
    stages {
        stage('Checkout SCM') {
            steps {
                checkout ([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'https://github.com/lokeshb003/updated-portfolio.git']]])
            }
        }
        stage('Install Node modules') {
            steps {
                sh 'npm install'
            }
        }
        stage('SonarQube Scanner SAST Test') {
            steps {
                sh '/var/lib/jenkins/sonar-scanner-4.8.0.2856-linux/bin/sonar-scanner -Dsonar.projectKey=Updated-portfolio -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_8e041fc788b7122b5c82b98d6973679a55329c78'
            }
        }
        stage('Publish Results') {
            steps {
                // Archive dependency check report as a build artifact
                archiveArtifacts artifacts: 'dependency-check-report.json', fingerprint: true
                publishHTML(target: [allowMissing: false,alwaysLinkToLastBuild: true,keepAll: true,reportDir: '.',reportFiles: 'dependency-check-report.json',reportName: 'OWASP Dependency Check Report'])
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}'
                sh 'docker build -t ${DOCKER_IMAGE_HUB} .'
                sh 'docker push ${DOCKER_IMAGE_HUB}'
            }
        }
        stage('Test the Docker Image') {
            steps {

                sh 'docker run -d --name=test-image -p 3000:3000 ${DOCKER_IMAGE_HUB}'
                sh 'sleep 60s'
                sh 'curl localhost:3000'
                sh 'sleep 60s'
                sh 'docker stop test-image && docker rm test-image' 
            }

        }
        stage('Image Scan with Trivy') {
            steps {
                sh 'docker run --rm aquasec/trivy image ${DOCKER_IMAGE_HUB}'
            }
        }
        stage('SSH and Execute Commands') {
            steps {
                sh "sshpass -p '$SSH_SERVER_PASS' ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_SERVER 'docker pull $DOCKER_IMAGE_HUB && docker run -d -p 5050:3000 $DOCKER_IMAGE_HUB'"
            }
        }
    }
}