// const SERVER_PORT = 8000

const dotenv = require('dotenv')

dotenv.config()

// console.log(process.env.SERVER_PORT, '1')

module.exports = {
  SERVER_PORT
} = process.env