import React from 'react'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <BrowserRouter>
                <Route path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App
