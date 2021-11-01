const express = require('express')
const app = express()
 
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.post('/login', function (req, res) {
  res.send('Hello World - post')
  console.log(req.body)
})

app.listen(3000)