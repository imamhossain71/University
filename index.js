const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.status(200).send('Hello World!')
})
app.get('/user', (req, res) => {
  return res.status(200).json({ name: 'John Doe', age: 30 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
