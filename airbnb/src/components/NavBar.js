import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const style = {marginBottom: '10px'};
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={style}>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/home">
                        <span className="nav-item nav-link">Home</span>
                    </Link>
                    <Link to="/about">
                        <span className="nav-item nav-link" href="#">About</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;