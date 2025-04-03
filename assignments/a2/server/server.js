const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const reciperouting = require('./routes/reciperouting')
const app = express()

app.use (cors())
app.use(express.json())
app.use('/recipe', reciperouting)

mongoose.connect('mongodb://127.0.0.1:27017/recipesdb')
.then(() => {
  console.log('connected to mongo')
  app.listen(8001, () => {
    console.log('server is on port 8001')
  })
})
