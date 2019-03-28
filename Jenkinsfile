pipeline {
    agent {
        docker {
            image 'node:lts'
            args '-v /etc/passwd:/etc/passwd'
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('prepare') {
            steps {
                git(
                    branch: "source",
                    url: "https://github.com/huynhducduy/huynhducduy.github.io"
                )
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'CI=true npm test'
            }
        }
        stage('deploy') {
            steps {
                dir('build') {
                    sshagent(credentials: ['a056d1a4-37d5-4853-886d-7cd9ebdcab6f']) {
                        sh 'git init'
                        sh 'git config core.sshCommand "ssh -v -o StrictHostKeyChecking=no"'
                        sh "git config user.email 'duuuuuuuuy@gmail.com' && git config user.name 'Huynh Duc Duy'"
                        sh 'git remote add origin git@github.com:huynhducduy/huynhducduy.github.io'
                        sh 'git add -A && git commit -m "jenkins builder"'
                        sh 'git push -u origin master --force'
                    }
                }
            }
        }
    }
}
