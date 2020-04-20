import React, {Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    logout(event) {
        event.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/login');
    }

    render() {

        const loggedIn = (
         <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="dropdown-item" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="dropdown-item" to="/user">Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="dropdown-item" to="/rss">Rss</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li className="nav-item">
                <a className="dropdown-item logout" href="" onClick={this.logout.bind(this)}>Logout</a>
            </li>
        </ul>
        );

        const notLoggedIn = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="dropdown-item" to="/login">Login</Link> 
            </li>
            <li className="nav-item">
                <Link className="dropdown-item" to="/register">Register</Link>
            </li>
        </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to={ localStorage.usertoken ? "/" : "/login" }>Rss App</Link>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-controls="navbar"
                        aria-label="Toggle navigation"
                        aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                </button>

                    <div id="navbar" className="collapse navbar-collapse justify-content-md-center">
                        { localStorage.usertoken ? loggedIn : notLoggedIn }   
                    </div>
            </nav> 
        )
    }
}   

export default withRouter(Navbar)

