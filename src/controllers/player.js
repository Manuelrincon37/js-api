// Controllers for players logic

const playerTest = (req, res) => {
  return res.status(200).send({
    status: 'success',
    message: 'Player endpoint test'
  })
}

// Export actions
module.exports = {
  playerTest
}
