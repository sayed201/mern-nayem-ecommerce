const express = require("express")
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')




const userRouter = require('./routers/UserRouters')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/users', userRouter)

app.get('/', (req, res) => {
    res.json({
        message: 'Well come to Mern stack'
    })
})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server is connecting on port${PORT}`);
    mongoose.connect('mongodb://localhost:27017/Money-management-app', () => {
        console.log('Database Connected.....');
    });
})
