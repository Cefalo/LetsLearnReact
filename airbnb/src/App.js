import React from 'react'
import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App
