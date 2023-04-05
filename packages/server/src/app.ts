import express, { Application } from 'express'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { Controller } from './utils/interface/controller.interface'
import { errorMiddleware } from './middleware/errorMiddleware'

export class App {
	public express: Application

	public port: number

	constructor(controllers: Controller[], port: number) {
		this.express = express()
		this.port = port

		this.initialiseDatabaseConnection()
		this.initializeMiddleware()
		this.initializeControllers(controllers)
		this.intiializeErrorHandling()
	}

	public listen = () => {
		this.express.listen(this.port, () => {
			// eslint-disable-next-line no-console
			console.log(`App listening on port ${this.port}`)
		})
	}

	private initializeMiddleware = () => {
		this.express.use(helmet())
		this.express.use(cors())
		this.express.use(morgan('dev'))
		this.express.use(express.json())
		this.express.use(express.urlencoded({ extended: false }))
		this.express.use(compression())
	}

	private initializeControllers = (controllers: Controller[]) => {
		controllers.forEach((controller) => {
			this.express.use('/api', controller.router)
		})
	}

	private initialiseDatabaseConnection = () => {
		const { MONGO_USR, MONGO_PWD, MONGO_PATH } = process.env as Record<string, string | number>

		mongoose.connect(`mongodb+srv://${MONGO_USR}:${MONGO_PWD}${MONGO_PATH}`).catch((e) => {
			// eslint-disable-next-line no-console
			console.log(e)
		})
	}

	private intiializeErrorHandling = () => {
		this.express.use(errorMiddleware)
	}
}

// old
// const app = express()
// const port = 5000

// app.get('/api/hello', (req, res) => {
// 	res.send('Hello World!')
// })

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`)
// })
