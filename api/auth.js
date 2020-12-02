const express = require('express')
const cors = require('cors')

const mockToken =
  '147f1f3d98341adfdf8aac7cf95b847f1632367c025cac4c6ac3a0f185141666'
const mockUser = {
  id: 1,
  name: 'Pakornpong',
  email: 'bird19_37@hotmail.com',
}

const app = express()
// const router = express.Router()
app.use(cors())
app.use(express.json())

app.get('/me', (req, res) => {
  const headers = req.headers.authorization

  const token = headers && headers.split(' ')[1] // Bearer token

  if (token === mockToken) {
    return res.json({
      user: mockUser,
    })
  } else {
    return res.status(401).json({ message: 'Tnvalid token' })
  }
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === 'birdpakornpong@gmail.com' && password === '123456') {
    return res.json({
      user: mockUser,
      token: mockToken,
    })
  } else {
    return res.status(401).json({ message: 'Invalid password' })
  }
})

module.exports = {
  path: '/api',
  handler: app,
}
