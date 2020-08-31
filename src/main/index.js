const express = require('express')
const app = express()

app.disable('X-powered-by')
app.get('/mango', (req, res) => {
  res.send('Mango')
})
app.listen(5858, () => console.log('Server Running'))
