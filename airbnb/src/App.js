import React from 'react'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App
