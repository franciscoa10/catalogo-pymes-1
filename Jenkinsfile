pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    stages {
        stage('Instalar dependencias') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }
        stage('Construir imagen Docker') {
            steps {
                echo 'Construyendo imagen Docker...'
                sh 'docker build -t catalogo-pymes .'
            }
        }
        stage('Desplegar contenedor') {
            steps {
                echo 'Desplegando contenedor...'
                sh 'docker run -d -p 3000:3000 catalogo-pymes'
            }
        }
    }
}
