const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
require ('ejs')
require ('dotenv').config()

const app = express()

const port = process.env.port || 3000;

app.use(cors ())
app.use(morgan ('dev'))
app.use(express.json())

app.use( express.static (path.join(__dirname, 'public')) )
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(require('./routes/blog.routes'))
app.use(require('./routes/user.routes'))

app.listen (port, () => console.log(`Sevidor en el http://localhost:${port}`))