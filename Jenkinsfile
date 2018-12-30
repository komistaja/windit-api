pipeline {
    agent any
    environment {
        HOME = '.'
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
                sh 'node --version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
