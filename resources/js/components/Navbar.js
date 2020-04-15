import React, {Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Rss from './Rss';
import Profile from './Profile';

export class Navbar extends Component {

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
        const menuItems = (
           <ul className="navbar-nav">
              <li class="nav-item dropdown">
                 <Link class="nav-link dropdown-toggle"
                       id="navbarDropdown" 
                       role="button" 
                       data-toggle="dropdown" 
                       aria-haspopup="true" 
                       aria-expanded="false">
                    Menu
                 </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    { 
                        localStorage.usertoken ?
                         <React.Fragment>
                            <Link class="dropdown-item" to="/rss" component={Rss}>Home</Link>
                            <Link class="dropdown-item" to="/user" component={Profile}>Profile</Link>
                            { this.props.admin ? <Link class="dropdown-item" to="/admin">Admin</Link> : null }
                            <div class="dropdown-divider"></div>
                             <a class="dropdown-item" href="" onClick={logout().bind(this)}>Logout</a>
                         </React.Fragment>                        
                        : 
                        <React.Fragment>
                            <Link class="dropdown-item" to="/login">Login</Link> 
                            <Link class="dropdown-item" to="/register">Register</Link> 
                        </React.Fragment>
                     }   
                    </div>
               </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
                            {menuItems}
                        </div>
            </nav>
        )
    }
}   

export default withRouter(Navbar)

