pipeline {
    agent any
    environment {
        HOME = '.'
    }

    stages {
        stage('Prepare') {
            echo 'Preparing..'
            sh 'docker stop $(docker ps -q)'
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker-compose up --build --no-start'
            }
        }
        stage('Test') {
            steps {
                echo 'No tests yet'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'docker-compose start postgres'
                sh 'docker-compose start windit'
            }
        }
    }
}
