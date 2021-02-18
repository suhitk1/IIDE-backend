const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./api');
const cors = require('cors');

// initialize express app
const app = express();
var corsOptions = {
    origin: 'http://localhost:3000'
  }

// connect to mongodb
mongoose.connect('mongodb://localhost/phonebook', {useMongoClient: true});
mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());

// initialize api routing
app.use('/api', router);

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err);

    res
        .status(422)
        .send({
            error: err.message
    });
});


// listen to port
app.listen(9999, () => {
    console.log('API is running on port 9999');
});