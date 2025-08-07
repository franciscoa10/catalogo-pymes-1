pipeline {
    agent {
        docker {
            image 'node:18' // Usa Node.js 18, puedes cambiar la versión si necesitas
        }
    }
    environment {
        NODE_ENV = 'development'
    }
    stages {
        stage('Instalación de dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Construcción del proyecto') {
            steps {
                sh 'npm run build || echo "No hay script de build, continuando..."'
            }
        }

        stage('Simulación de despliegue') {
            steps {
                echo 'Aquí podrías correr tu app con node o simular el entorno productivo'
                sh 'node index.js || echo "No se encontró index.js, revisa el punto de entrada"'
            }
        }
    }
}
