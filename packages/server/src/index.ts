import express, { Application } from 'express'
import 'dotenv/config.js'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { errorMiddleware } from './middleware/errorMiddleware.js'
import { PostController } from './resources/post/post.controller.js'
import { validateEnv } from './utils/validateEnv.js'

validateEnv()

const port = Number(process.env.PORT)
const app: Application = express()

// initialize middlewares
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression())

// initialize controllers
app.use('/api', new PostController().router)

// initialize error handling
app.use(errorMiddleware)

// start
app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`App listening on port ${port}`)
})
