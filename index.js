'use strict'

const bodyParser = require('body-parser')
const express = require('express')

const chipher = require('./chipher')

const app = express()

app.use(bodyParser())

app.post('/api/chipher/:offset', (req, res) => {
  const offset = parseInt(req.params.offset)
  const encodedText = chipher(req.body.text, offset)
  res.send({
    encodedText
  })
})

app.listen(3000)
