var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongo = require('./config/components/mongo');

const port = 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recordRouter = require('./routes/records/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/')));  

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',recordRouter);

mongo.bootstrap();

app.listen(port,()=>{
    console.log('CMSMongoTask Listening to http://localhost:',port);
});

app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});


module.exports = app;
