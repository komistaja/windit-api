pipeline {
    agent any
    environment {
        HOME = '.'
    }

    stages {
        stage('Prepare') {
            steps {
                echo 'Preparing..'
                sh 'docker stop $(docker ps -aq)'
                sh 'docker rm $(docker ps -aq)'
            }
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
                sh "export COMPOSE_INTERACTIVE_NO_CLI=1 && docker-compose exec -it windit /bin/sh -c 'npm run seed'"
            }
        }
    }
}
