/* eslint-disable  */

const express = require('express')
const app = express()
const port = 6666
// const pouchdb= require('../src/views/database/pouchdb.js')
app.get('/', (req, res) => {
    console.log("jo")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})