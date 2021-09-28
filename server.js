const express = require('express');
const app = express();
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection')
dotenv.config({path: './config.env'})
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ extended:true }))

connectDB();

app.set('view engine', 'ejs')
app.set("Views", path.resolve(__dirname, 'views'))

app.use('/css', express.static(path.join(__dirname, './assests/css')))
app.use('/img', express.static(path.join(__dirname, './assests/img')))
app.use('/js', express.static(path.join(__dirname, './assests/js')))

app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`);
})