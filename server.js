const express = require('express'), app = express(), path = require('path'), PORT = process.env.PORT ?? 5000

app.use(express.static(path.join(__dirname, 'view', 'home')))
app.use(express.static(path.join(__dirname, 'view', '404')))

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'view', 'home', 'index.html'))})

app.get('*', (req, res) => {res.sendFile(path.join(__dirname, 'view', '404', 'index.html'))})

app.listen(PORT, console.log('server on in http://localhost:'+PORT))