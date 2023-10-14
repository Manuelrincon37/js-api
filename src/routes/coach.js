// Create route for coaches
const express = require('express')
const router = express.Router()
const { coachTest } = require('../controllers/coach')

// Define routes
router.get('/coach-test', coachTest)
module.exports = router
