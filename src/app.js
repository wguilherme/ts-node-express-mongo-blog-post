const express = require('express')
const app = express()
// server application
app.listen(3000, () => console.log("Server is running at PORT 3000 🚀"))
// routes
app.get('/api', (req, res) => {
  res.send('API online')
})