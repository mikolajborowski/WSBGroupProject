import React, { Component } from 'react';
import {getUser} from '../../api/user';
import {Link} from 'react-router-dom';


export default class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        getUser().then(response => {
            this.setState({
                name: response.user.name,
                email: response.user.email
            })
        })
    }

    render() {
        return (
            <div className="container">
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
                        <Link to="/user-edit">
                            <button className="btn btn-primary btn-lg edit">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}