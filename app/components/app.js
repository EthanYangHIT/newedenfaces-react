/**
 * Created by hasee on 2016/3/27.
 */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
//import {RouteHandler} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;