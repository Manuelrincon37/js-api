// Controllers for coach logic

const coachTest = (req, res) => {
  return res.status(200).send({
    status: 'success',
    message: 'Coach endpoint test'
  })
}

// Export actions
module.exports = {
  coachTest
}
