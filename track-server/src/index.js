require('./models/User')
require('./models/Track')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()
app.use(cors())
app.use(express.json({ extended: false }))
app.use(authRoutes)
app.use(trackRoutes)

const mongoUri = 'mongodb://127.0.0.1:27017/track'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (erroe) => {
  console.error('Error connecting to mongo', error)
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
