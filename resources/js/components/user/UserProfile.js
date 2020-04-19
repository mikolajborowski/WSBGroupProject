import React, { Component } from "react";
import { getUser } from "../../api/user";
import { Link } from "react-router-dom";
import GoBack from "../utils/GoBack";
import Admin from "./Admin";
export default class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            isAdmin: false
        };
    }

    componentDidMount() {
        getUser().then(response => {
            const user = response.user;
            const isAdmin = user.id === 1 || user.is_user_admin === 1;
            this.setState({
                name: user.name,
                email: user.email,
                isAdmin
            });
        });
    }

    render() {
        const adminPanel = (
            <div className="jumbotron mt-5 mb-5">
                <div className="col-sm-12 mx-auto">
                    <h1 className="text-center">Admin Panel</h1>
                    <Admin />
                </div>
            </div>
        );
        return (
            <div className="container">
                <GoBack onClick={() => this.props.history.goBack()} />
                <div className="jumbotron mt-5">
                    <div className="col-sm-12 mx-auto">
                        <h1 className="text-center">User Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center col-md-6 mx-auto">
                        <Link to="/edit-user">
                            <button className="btn btn-primary btn-lg edit">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
                {this.state.isAdmin ? adminPanel : null}
            </div>
        );
    }
}
