const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const port = 3000;

app.use(cors ())
app.use(morgan ('dev'))
app.use(express.json())

app.get('/', function (req, res){
    res.send('Hola Mundo anashe')
})

app.post('/', function (req, res){
    res.send('Hola Mundo anashe')
})

app.listen (port, () => console.log(`Sevidor en el http://localhost:${port}`))