const express = require('express')
const fetch = require('isomorphic-fetch')
const app = express()
const port = 3000

app.get('/planets', async (req: any, res: any) => {
  const response = await fetch('swapi.dev/api/planets/1/')
  const planets = await response.json()
  res.send(planets)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
