var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose')
var cors = require('cors')

// var usersRouter = require('./routes/users');
var authRouterBCorporation = require('./routes/auth-b-corporation')
var authRouterInvestor = require('./routes/auth-investor')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', 1);
app.enable('trust proxy');

app.use(
    cors({
        origin: [process.env.REACT_APP_URI] // <== URL of our future React app
    })
);

// app.use(
//     corps()
//   );

// app.use('/users', usersRouter);
app.use('/auth-b-corporation', authRouterBCorporation)
app.use('/auth-investor', authRouterInvestor)

mongoose
.connect(process.env.MONGODB_URI)
.then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
})
.catch((err) => {
    console.error("Error connecting to mongo: ", err);
}); 

module.exports = app;
