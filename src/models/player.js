// Create model for players of each team

const { Schema, model } = require('mongoose')

const playerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  glb: {
    type: Number,
    required: true
  },
  team: {
    type: Schema.ObjectId,
    ref: 'Team'
  }
})
module.exports = model('Player', playerSchema, 'players')
