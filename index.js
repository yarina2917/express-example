const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
// The order of middleware loading is important: middleware functions that are loaded first are also executed first.
//
// function requestTime(req, res, next) {
//     console.log('Time:', Date.now())
//     next()
// }
//
// app.use(requestTime)
//
// app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
// })

// Middleware can also be declared in an array for reusability.

// function logOriginalUrl (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }
//
// function logMethod (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
// }
//
// const logStuff = [logOriginalUrl, logMethod]
// app.get('/user/:id', logStuff, (req, res, next) => {
//     res.send('User Info')
// })

// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(cors());

// Basic

app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.post('/', (req, res) => {
    res.status(200).send('POST request to the homepage')
})

app.listen(PORT, () => console.log(`Server works on port ${PORT}`))

// Route paths can be strings, string patterns, or regular expressions.

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
})


// Route parameters are named URL segments that are used to capture the values specified at their position in the URL
// http://localhost:3000/users/34/books/8989

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

// http://localhost:3000/user/42

app.get('/user/:userId(\\d+)', function (req, res) {
    console.log('GET')
    res.send(req.params)
})

