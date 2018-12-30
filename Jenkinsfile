pipeline {
    agent any
    environment {
        HOME = '.'
    }

    stages {
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
                sh 'docker stop $(docker ps -aq)'
                sh 'docker rmi $(docker ps -aq)'
                sh 'docker-compose start postgres'
                sh 'docker-compose start windit'
            }
        }
    }
}
