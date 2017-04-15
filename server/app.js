var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var jwt = require("jsonwebtoken");

// 日志
var log4js = require('./log');
log4js.log("日志开起来了！");
// 路由
var route_ionchat = require('./routes/index');

var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' yipeng-nodejs')
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, '/public/img/favicon.ico')));
app.use(logger('dev'));
// 指定请求头最大值为10m
app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {maxAge : 86400000}));

app.use(express.query());



/**
 * 鉴权
 */
jwt.co_verify = function (jwtString, secretOrPublicKey, options) {
  return function (cb) {
    console.log("jwtString, secretOrPublicKey",jwtString+":"+secretOrPublicKey);
    jwt.verify(jwtString, secretOrPublicKey, options, cb);
  }
}

app.use('/', route_ionchat);

/// 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 开发模式
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// 错误处理
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message:  err.message,
        error: {}
    });
});


module.exports = app;
