node {
	def app
	def project_name = 'msm'

	stage('Clone repo'){
		checkout scm
	}

  stage('Init Submodule'){
    sh "git submodule init"
    sh "git submodule update"
  }

	stage('Build'){
		echo 'Cleaning old files.'
    sh "rm -rf .git"
		sh "ls -lah"
		sh "yarn"
		sh "yarn run build"
		echo 'Packing files.'
		sh "cd ./dist && zip -r package.zip ."
	}

  stage('Push to Remote Server'){
		echo 'Connecting to the server.'
		sh "scp -r -P 2047 $WORKSPACE/dist/package.zip www@ssh.limeishu.org.tw:/home/www/webserver/lms-extra/msm"
	}

	stage('Active Service'){
    echo 'Connecting to the server.'
    sh "ssh www@ssh.limeishu.org.tw -p 2047 '\
          cd /home/www/webserver/lms-extra/msm; \
          unzip -o package.zip; \
          ls -lah; \
          rm package.zip; \
          ls -lah; \
      '"
	}

	stage('Clean'){
		echo 'Cleaning old files.'
		sh "rm -rf $WORKSPACE/dist/package.zip"
	}
}
