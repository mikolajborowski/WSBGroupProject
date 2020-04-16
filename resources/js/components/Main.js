import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Rss from './Rss';
import Login from './login/Login';
import Register from './login/Register';
import UserProfile from './user/UserProfile';
import UserEdit from './user/UserEdit';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <Navbar />
                    <Route exact path="/" component={LandingPage} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/user" component={UserProfile} />
                        <Route exact path="/user-edit" component={UserEdit} />
                        <Route exact path="/rss" component={Rss} />
                    </div>
                </div>
            </Router>
        )
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
