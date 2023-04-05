import 'dotenv/config.js'
import { validateEnv } from './utils/validateEnv.js'
import { PostController } from './resources/post/post.controller.js'
import { App } from './app.js'

validateEnv()

const app = new App([new PostController()], Number(process.env.PORT))

app.listen()
