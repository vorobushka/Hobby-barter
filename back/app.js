const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

mongoose.connect('mongodb://localhost:27017/skillBarter', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const fileStoreOptions = {};
app.use(
  session({
    store: new FileStore(fileStoreOptions),
    key: 'user_sid',
    secret: 'anything here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 100000000,
    },
  }),
);

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
