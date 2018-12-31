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
                sh 'COMPOSE_HTTP_TIMEOUT=200 docker-compose up --build --no-start'
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
                script {
                    def seedcommand = 'npm run seed'
                }
                sh 'docker-compose start postgres'
                sh 'docker-compose start windit'
                sh('./seed_database.sh')
                sh "export COMPOSE_INTERACTIVE_NO_CLI=1 && docker-compose exec windit /bin/sh -c ${seedcommand}"
            }
        }
    }
}
