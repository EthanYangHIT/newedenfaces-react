var express = require('express');
var path = require('path');//
var logger = require('morgan');//HTTP请求日志
var bodyParser = require('body-parser'); //渲染post请求数据
//start
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),function(){
    console.log('Express server listening or port ' + app.get('port'));
});



