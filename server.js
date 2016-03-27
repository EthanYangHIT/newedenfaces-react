
require('babel-register');
var express = require('express');
var path = require('path');//
var logger = require('morgan');//HTTP请求日志
var bodyParser = require('body-parser'); //渲染post请求数据

var swig = require('swig');
var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom/server');
var routes = require('./app/routes');
//start express
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.listen(app.get('port'),function(){
    console.log('Express server listening or port ' + app.get('port'));
});

