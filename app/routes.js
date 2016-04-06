/**
 * Created by yangyusenhit on 2016/3/25.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddCharacter from './components/AddCharacter';

export default(
    <Route component={App}>
        <Route path='/' component={Home}/>
        <Route path='/add' component={AddCharacter}/>
    </Route>
);

