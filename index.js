const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World this is watch tower working!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})