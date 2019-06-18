import React from 'react'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <Home/>
        </React.Fragment>
    );
};

export default App
