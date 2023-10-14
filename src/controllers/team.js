// Controllers for team logic
// import dependencies
const { plugin } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
plugin(mongoosePaginate)

// Import model
const Team = require('../models/team')

const teamTest = (req, res) => {
  return res.status(200).send({
    status: 'success',
    message: 'Team endpoint test'
  })
}
// Create a new Team
const create = (req, res) => {
  // get team data from request
  const params = req.body

  // chek form incomplete data
  if (!params.name || !params.coach) {
    return res.status(400).send({
      status: 'error',
      message: 'Expected more data'
    })
  }

  // Check for Duplicates
  Team.find({
    $or: [
      { name: params.name.toLowerCase() },
      { coach: params.name.toLowerCase() }
    ]
  }).then(async (teams) => {
    if (teams && teams.length >= 1) {
      return res.status(200).send({
        status: 'success',
        message: 'Team already exist'
      })
    }
    // create team object
    const teamToSave = new Team(params)

    // Save on DB
    teamToSave.save().then((teamSaved) => {
      if (!teamSaved) {
        return res.status(500).send({
          status: 'error',
          message: 'Create team failed'
        })
      }

      teamSaved.toObject()

      return res.status(200).send({
        status: 'success',
        message: 'Team created',
        teamSaved
      })
    }).catch((err) => {
      return res.status(500).send({
        status: 'error',
        message: 'Create team failed',
        err
      })
    })
  })
}

const listTeams = async (req, res) => {
  const { page, limit } = req.query

  const options = {
    page: page || 1,
    limit: limit || 10
  }
  const excludedFields = '-__v'
  try {
    const teams = await Team.paginate({}, options, excludedFields)

    if (!teams) {
      return res.status(404).send({
        status: 'error',
        message: 'Teams not found'
      })
    }
    return res.status(200).send({
      status: 'success',
      teams
    })
  } catch (err) {
    return res.status(500).send({
      status: 'error',
      message: 'Listing error'

    })
  }
}

// Export actions
module.exports = {
  teamTest,
  create,
  listTeams
}
