import { HttpException } from 'util/exception/http.exception'
import { Request, Response } from 'express'

export const errorMiddleware = (error: HttpException, req: Request, res: Response) => {
	const status = error.status || 500
	const message = error.message || 'Something went wrong'

	res.status(status).send({
		status,
		message,
	})
}
