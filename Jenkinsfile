pipeline {
    agent any

    environment {
        IMAGE_NAME = 'catalogo-pymes'
        CONTAINER_NAME = 'catalogo-pymes'
        PORT = '3000'
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
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Desplegar contenedor') {
            steps {
                echo 'Desplegando contenedor...'
                sh """
                    docker rm -f ${CONTAINER_NAME} || true
                    docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}
                """
            }
        }
    }
}