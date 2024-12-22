pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20.11.0'
                    reuseNode true
                }
            }
            steps {
                sh '''
                node --version
                npm --version
                cd "fast pizza"
                npm install
                npx vite build
                ls -la
                '''
            }
        }
    }
}
