import { Router, Request, Response, NextFunction } from 'express'
import { valudationMiddleware } from '../../middleware/validationMiddleware.js'
import { Controller } from '../../utils/interface/controller.interface.js'
import { HttpException } from '../../utils/exception/http.exception.js'
import { create as validationCreate } from './post.validation.js'
import { PostService } from './post.service.js'

export class PostController implements Controller {
	public path = '/posts'

	public router = Router()

	private PostService = new PostService()

	constructor() {
		this.initializeRoutes()
	}

	private initializeRoutes = () => {
		this.router.post(`${this.path}`, valudationMiddleware(validationCreate), this.create)
	}

	private create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { title, body } = req.body
			const post = await this.PostService.create(title, body)
			res.status(201).json({ post })
		} catch (e) {
			let errMessage = 'Cannot create post'
			if (typeof e === 'object' && e !== null && 'message' in e && typeof e.message === 'string') {
				errMessage = e.message
			}
			next(new HttpException(400, errMessage))
		}
	}
}
