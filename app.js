const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const userRoutes = require('./routes/user-routes')

const app = express()

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database Connected.')
  })

app.use('/api', userRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
