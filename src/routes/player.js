// Create route for players
const express = require('express')
const router = express.Router()
const { playerTest } = require('../controllers/player')
// Define routes
router.get('/player-test', playerTest)
module.exports = router
