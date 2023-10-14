// import dependencies
const { conn } = require('./config/db')
const express = require('express')
const cors = require('cors')
const teamRoutes = require('./routes/team')
const playerRoutes = require('./routes/player')
const coachRoutes = require('./routes/coach')

// start app
console.log('Starting app')

// Connect to db
conn()

// Create Node Server
const app = express()
const port = process.env.PORT || 3900

// Set cors
app.use(cors())

// Set body to JS Object
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/team', teamRoutes)
app.use('/api/player', playerRoutes)
app.use('/api/coach', coachRoutes)
// Test Route
app.get('/test', (req, res) => {
  return res.status(200).json({
    msg: 'Hello World'
  })
})

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
