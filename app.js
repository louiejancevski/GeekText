// app.js
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const booksRouter = require ('./routes/api/books')
const authorsRouter = require ('./routes/api/authors')
const commentRouter = require ('./routes/api/comments')
const usersRouter = require('./routes/api/users');
const cartRouter = require('./routes/api/carts');

require('dotenv').config()

// Create Express app
const app = express()

//Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Bodyparser middleware
app.use(bodyParser.json())

//API Routes
app.use('/api/books', booksRouter)
app.use('/api/authors', authorsRouter)
app.use('/api/users', usersRouter)
app.use('/api/comments', commentRouter)
app.use('/api/carts', cartRouter)

// Get PORT
const PORT = process.env.PORT || 5000

// Start the Express server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
