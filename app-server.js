var express = require('express')
var proxy = require('http-proxy-middleware')

var apiProxy = proxy('/api', {
  target: 'http://localhost:3000',
  changeOrigin: true // for vhosted sites
})

var app = express()

app.use(apiProxy)
app.use(express.static('.'))
app.listen(80)
console.log('App web server listening on port 80')