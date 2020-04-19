import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navbar from "./utils/Navbar";
import LandingPage from "./LandingPage";
import Rss from "./rss/Rss";
import ManageRss from "./rss/ManageRss";
import Login from "./login/Login";
import Register from "./login/Register";
import UserProfile from "./user/UserProfile";
import UserEdit from "./user/UserEdit";
import FormattedRssList from "./rss/FormattedRssList";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: localStorage.usertoken
        };
    }
    render() {
        return (
            <Router>
                <div className="main">
                    <Navbar />
                    <Route exact path="/">
                        {!this.state.loggedIn ? (
                            <Redirect to="/login" />
                        ) : (
                            <LandingPage />
                        )}
                    </Route>
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/user" component={UserProfile} />
                        <Route exact path="/edit-user" component={UserEdit} />
                        <Route exact path="/rss" component={Rss} />
                        <Route exact path="/rss-list" component={ManageRss} />
                        <Route exact path="/rss-format" component={FormattedRssList} />
                        {/* <Route exact path="/groups" component={} /> */}
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
