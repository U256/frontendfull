import { Request, Response, RequestHandler, NextFunction } from 'express'
import Joi from 'joi' // TODO: discover it; mb replace with analog

export const valudationMiddleware = (schema: Joi.Schema): RequestHandler => {
	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const validationOptions = {
			abortEarly: false,
			allownknown: true,
			stripUnknown: true,
		}

		try {
			const value = await schema.validateAsync(req.body, validationOptions)
			req.body = value
			next()
		} catch (error) {
			if (typeof error !== 'object' || error === null) {
				return
			}

			const errors: string[] = []
			;(error as { details: Error[] }).details.forEach((err) => {
				errors.push(err.message)
			})
			res.status(400).send({ errors })
		}
	}
}
