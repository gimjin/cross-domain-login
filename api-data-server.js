var express = require('express')
var app = express()
var setCookie = require('set-cookie')
 
app.post('/api/proxy-login', function (req, res, next) {
  setCookie('SESSION', '11111111111111111111', {
    res: res
  })
  res.json({msg: 'proxy login success'})
})

app.get('/api/proxy-info', function (req, res) {
  if (req.headers.cookie) {
    res.json({msg: 'req automatic has session cookie.'})
  } else {
    res.json({msg: 'set-cookie fail.'})
  }
})
 
app.listen(3000, function () {
  console.log('API web server listening on port 3000')
})