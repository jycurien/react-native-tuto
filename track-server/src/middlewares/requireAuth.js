const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = async (req, res, next) => {
  let token = req.header('authorization')

  if (!token) {
    return res.status(401).json({ error: 'You must be logged in.' })
  }

  token = token.replace('Bearer ', '')

  try {
    const { userId } = jwt.verify(token, 'MY_SECRET_KEY')
    const user = await User.findById(userId)
    if (!user) {
      res.status(401).json({ error: 'You must be logged in.' })
    }
    req.user = user
    next()
  } catch (err) {
    res.status(401).json({ error: 'You must be logged in.' })
  }
}
