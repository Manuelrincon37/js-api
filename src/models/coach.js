// Create model for coaches data

const { Schema, model } = require('mongoose')

const coachSchema = Schema({
  name: {
    type: String,
    required: true
  },
  team: {
    type: Schema.ObjectId,
    ref: 'Team'
  }

})
module.exports = model('Coach', coachSchema, 'coaches')
