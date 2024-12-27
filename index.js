require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! to')
})

app.get('/avnish', (req, res)=>{
    res.send('manchal chaudhary')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube', (req, res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})