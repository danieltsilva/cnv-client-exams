import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    render() {
        return (
        <div className="ui secondary poiting menu">
            <Link to="/" className="item">
                Home
            </Link>
            <div className="right menu">
                <div className="item">
                    Google Login
                </div>
            </div>
        </div>
        );
    }
}

export default Menu;