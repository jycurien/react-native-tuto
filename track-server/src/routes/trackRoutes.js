const express = require('express')
const requireAuth = require('../middlewares/requireAuth')
const mongoose = require('mongoose')
const Track = mongoose.model('Track')

const router = express.Router()
router.use(requireAuth)

router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id })
  res.json(tracks)
})

router.post('/tracks', async (req, res) => {
  const { name, locations } = req.body

  if (!name || !locations) {
    return res
      .status(422)
      .json({ error: 'You must provide a name and locations' })
  }

  try {
    const track = new Track({ userId: req.user._id, name, locations })
    await track.save()
    res.json(track)
  } catch (err) {
    res.status(422).json({ error: err.message })
  }
})

module.exports = router
