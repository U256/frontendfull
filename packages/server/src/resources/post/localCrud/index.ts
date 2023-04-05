// import express from 'express'
import fs from 'fs'
import fsPromise from 'fs/promises'
import bodyParser from 'body-parser'
import store from './store.json'

/* eslint-disable no-console */

interface Usarr {
	username: string
	email: string
	password: string
}

export const read = (): Usarr[] => {
	return []
}

export const create = (data: Omit<Usarr, 'id'>) => {
	const existAccounts = read()
	const newAccountId = Math.floor(100000 + Math.random() * 900000)

	existAccounts[newAccountId] = data

	// saveAccountData(existAccounts)
	console.log('success!')
}

export const update = (id: string, updated: Usarr) => {
	const existAccounts = read()
	fs.readFile('./store.json', null, (err, data) => {
		const accountId = id
		// existAccounts[accountId] = req.body
		// saveAccountData(existAccounts)
		// res.send(`accounts with id ${accountId} has been updated`)
	})
}
