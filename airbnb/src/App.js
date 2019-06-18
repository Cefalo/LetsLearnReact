import React from 'react'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import CardDetails from './components/CardDetails';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/card/:id" component={CardDetails}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App
