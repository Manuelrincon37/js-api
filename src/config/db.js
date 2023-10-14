// Establish conection with database
const mongoose = require('mongoose')

const conn = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/js_api')
  } catch {
    console.log('Error connecting to database')
    throw new Error('Error connecting to database')
  }
}

module.exports = {
  conn
}
