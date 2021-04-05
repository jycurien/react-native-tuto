const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })
  try {
    await user.save()
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.json({ token })
  } catch (err) {
    return res.status(422).json({ error: err.message })
  }

  res.json(user)
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res
      .status(422)
      .json({ error: 'You must provide email and password' })
  }

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  try {
    await user.comparePassword(password)
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.json({ token })
  } catch (err) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  res.json(user)
})

module.exports = router
