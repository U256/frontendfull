import Joi from 'joi'

export const create = Joi.object({
	title: Joi.string().required(),
	body: Joi.string().required(),
})
export const update = Joi.object({
	title: Joi.string(),
	body: Joi.string(),
})
