import express from 'express'

const app = express()
const port = 5000

app.get('/api/hello', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Example app listening on port ${port}`)
})
