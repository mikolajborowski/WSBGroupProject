import React, { Component } from 'react';
import getUser from './login/LoginFunctions';


export default class Profile extends Component {
    constructor() {
        super();
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
                    <div className="col-sm-4 mt-5">
                        <h2 className="text-center">Profile</h2>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>this.state.name</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>this.state.email</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}