import React, { Component } from 'react';
import {getUser, postUser} from '../../api/user';
import {Link} from 'react-router-dom';


export default class UserEdit extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            newName: '',
            newEmail: '',
            errors: {
                newName: '',
                newEmail: ''
            }
        }
        this.onChange = this.onChange.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    componentDidMount() {
        getUser().then(response => {
            this.setState({
                name: response.user.name,
                email: response.user.email,
            })
        })
    }

    validNewDataFields() {
        const allFilled = !(['newName', 'newEmail'].map(field => (this.state[field] !== '')).includes(false));
        let noErrors = true;
        Object.values(this.state.errors).forEach(val => val.length > 0 && (noErrors = false));
        return allFilled && noErrors;
    }

    onChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;

        const emailRegex = 
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

            switch (name) {
            case 'newName': 
                errors.newName = value.length < 3 
                ? 'Username must contain at least 3 characters' : ''
                break;    
            case 'newEmail':
                errors.newEmail = emailRegex.test(value) 
                ? '' : 'Please enter valid email address';
                break; 
            default: break;
        }

        this.setState({errors, [name]: value});
    }
    onClickSubmit(event) {
        event.preventDefault();
        const userData = {
            name: this.state.newName,
            email: this.state.newEmail
        }

       if(this.validNewDataFields()) {
        postUser(userData).then(
            response => this.props.history.push('/user')
        );
        }
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
                                           name="newName"
                                           className="form-control" 
                                           placeholder="New username"
                                           aria-label="Username" 
                                           aria-describedby="basic-addon1"
                                           onChange={this.onChange} />
                                           {this.state.errors.newName.length > 0 && 
                                           <span className='error'>{this.state.errors.newName}</span>}
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
                                           name="newEmail"
                                           className="form-control" 
                                           placeholder="New email address" 
                                           aria-label="Email" 
                                           aria-describedby="basic-addon1"
                                           onChange={this.onChange} />
                                            {this.state.errors.newEmail.length > 0 && 
                                           <span className='error'>{this.state.errors.newEmail}</span>}
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center col-md-6 mx-auto">
                       { this.validNewDataFields() ?
                           <button className="btn btn-primary btn-lg edit" onClick={this.onClickSubmit}>Save</button>
                          : <button className="btn btn-secondary btn-lg edit" disabled>Save</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}