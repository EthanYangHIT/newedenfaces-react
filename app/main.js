/**
 * Created by yangyusenhit on 2016/3/25.
 */
import React from 'react';
import Router from 'react-router';
import routes from './routes';
//var React = require('react');
//var Router = require('react-router');
//var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('app'));
    //React.render(
    //    React.createElement('Handler', null, null),
    //    document.getElementById('app')
    //)
});

