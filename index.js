const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send("we're not okay")
})

app.listen(8080, () => console.log('Okay We up'))
