import React, { Component } from 'react';
import {getUser} from '../../api/user';
import {Link} from 'react-router-dom';


export default class UserEdit extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            newName: '',
            newEmail: ''
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
                                <td>
                                    <div className="edit-label">Name:</div>
                                </td>
                                <td>
                                <div className="input-group mb-3">
                                    <input type="text" 
                                           className="form-control" 
                                           placeholder={this.state.name} 
                                           aria-label="Username" 
                                           aria-describedby="basic-addon1" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="edit-label">Email:</div>
                                </td>
                                <td>
                                <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                    <input type="email" 
                                           className="form-control" 
                                           placeholder={this.state.email} 
                                           aria-label="Email" 
                                           aria-describedby="basic-addon1" />
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center col-md-6 mx-auto">
                        <Link to="/user">
                            <button className="btn btn-primary btn-lg edit">Save</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}