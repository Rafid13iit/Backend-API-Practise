const express = require('express')

const contactRoute = require('./api/routes/contact')

// console.log(express)

const app = express()

const PORT = process.env.PORT || 3000


app.use('/api/contacts', contactRoute)


app.get('/', (req, res)=>{
    res.send("<div><h1>Hello World!</h1><p>My name is Rafid & this is my first backend code</p></div>")
})

app.get('/posts', (req, res)=>{
    res.send("<h1>I am Post page</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})