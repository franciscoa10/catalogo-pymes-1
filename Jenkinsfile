pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Ejecutar aplicación') {
            steps {
                sh 'node server.js'
            }
        }
    }
}
