
pipeline {
    agent any

    tools {nodejs "Node12"}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
                sh 'npm install lambdatest-cypress-cli'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npm run cypress:lambda'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

