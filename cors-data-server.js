var express = require('express')
var cors = require('cors')
var app = express()
var setCookie = require('set-cookie')
 
var corsOptions = {
  origin: 'http://localhost',
  credentials: true
}
 
app.post('/cors-login', cors(corsOptions), function (req, res, next) {
  setCookie('SESSION', '00000000000000000000', {
    res: res
  })
  res.json({msg: 'cors login success'})
})

app.get('/cors-info', cors(corsOptions), function (req, res) {
  if (req.headers.cookie) {
    res.json({msg: 'req automatic has session cookie.'})
  } else {
    res.json({msg: 'set-cookie fail.'})
  }
})
 
app.listen(3100, function () {
  console.log('CORS-enabled web server listening on port 3100')
})