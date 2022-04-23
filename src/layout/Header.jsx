import React from "react";

const Header = () => {
    return (
        <nav className="blue darken-4">
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo" style={{'paddingLeft': '1rem'}}><h5>Dogeball timer</h5></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {
                        // <li><a h ref="mobile.html"><i className="material-icons">more_vert</i></a></li>
                    }
                </ul>
            </div>
        </nav>        
    );
}

export {Header};