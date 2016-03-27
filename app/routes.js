/**
 * Created by yangyusenhit on 2016/3/25.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
//var React = require('react');
//var Route = require('react-router').Route;
//var NotFoundRoute = require('react-router').NotFoundRoute;
//var App = require('./components/App');
//var Home = require('./components/Home');

export default(
    <Route component={App}>
        <Route path='/' component={Home}/>
    </Route>
);

