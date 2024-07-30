const express = require('express')
const app = express()

app.get('/', (request, response) => {
  let date = new Date()
  //  response.send(`today's date ${date}`)
  response.sendFile('./page.html', {root: __dirname})
})

app.listen(3000)
