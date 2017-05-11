node {
		stage("Main build") {

				checkout scm

				docker.image('node:7.1').inside {

					stage("NPM install") {
						sh "npm install"
					}

					stage("Test") {
						sh "npm test"
					}

			 }

		}

		// Clean up workspace
		step([$class: 'WsCleanup'])
}