pipeline {
    agent any
    environment {
        HOME = '.'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker-compose up --build'
            }
        }
        stage('Test') {
            steps {
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'docker rm -f windit || true'
            }
        }
    }
}
