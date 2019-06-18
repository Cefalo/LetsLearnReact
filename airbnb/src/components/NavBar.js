import React from 'react';

const NavBar = () => {
    const style = {marginBottom: '10px'};
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={style}>
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