// Create route for teams
const express = require('express')
const router = express.Router()
const { teamTest, create, listTeams } = require('../controllers/team')

// Define routes
router.get('/team-test', teamTest)
router.post('/create', create)
router.get('/list/:page?', listTeams)

module.exports = router
