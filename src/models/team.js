// Create teams models using mongoose

const { Schema, model } = require('mongoose')

const teamSchema = Schema({

  name: {
    type: String,
    required: true
  },
  coach: {
    type: String,
    required: true
  },
  players: [{
    type: Schema.ObjectId,
    ref: 'Player'
  }],
  logo: {
    type: String,
    default: 'defautl.png'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Team', teamSchema, 'teams')
