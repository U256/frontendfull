import { Router } from 'express'

export interface Controller {
	pat: string
	router: Router
}
