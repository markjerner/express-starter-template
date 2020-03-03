const express = require('express')
const indexRouter = require('./routes/indexRouter')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

app.listen(PORT, console.log(`Server running on port: ${PORT}.`))
