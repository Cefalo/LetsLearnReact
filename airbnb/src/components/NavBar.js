import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <span className="nav-item nav-link" href="#">Home</span>
                    <span className="nav-item nav-link" href="#">About</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;