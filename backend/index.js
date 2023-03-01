const express = require('express')
const route = require('./route')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')


app.use(express.json())
app.use(multer().any())

mongoose
    .connect(
        'mongodb+srv://madhusmita_123:5fiVrKsOKBIGJsKe@cluster0.cpbhduk.mongodb.net/Mern!!'
    )
    .then(() => console.log('MDB is connected'))
    .catch(err => console.log(err));
app.use(cors({ 'Access-Control-Allow-Origin': '*' }));
app.use('/', route)

app.listen(4000, () => {
    console.log("server is running on port:", 4000)

})
