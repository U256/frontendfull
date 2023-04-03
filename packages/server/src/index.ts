import 'dotenv/config'
import { validateEnv } from 'util/validateEnv'
import { PostController } from 'resource/post/post.controller'
import { App } from './app'

validateEnv()

const app = new App([new PostController()], Number(process.env.PORT))

app.listen()
