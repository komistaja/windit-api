pipeline {
    agent {
        docker { image 'node:alpine' }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node --version'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'node --version && npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
