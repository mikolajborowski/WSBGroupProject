import React, {Component } from 'React';
import { register } from '../../api/login';
import { Link } from 'react-router-dom';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {
                name: '',
                email: '',
                password: '',
                passwordConfirmation: '',
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    checkIfFieldsFilled(fieldNames) {
        let allFilled = [];
        fieldNames.forEach(field => allFilled.push(this.state[field] !== ''));
        return !(allFilled.includes(false))
    }

    validateForm(errors) {
        let noErrors = true;
        const allFieldsFilled = this.checkIfFieldsFilled(['name', 'email', 'password', 'passwordConfirmation']);
        Object.values(errors).forEach(val => val.length > 0 && (noErrors = false));
        const formValid = noErrors && allFieldsFilled;
        return formValid;
    }

    onChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
        const emailRegex = 
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'name':
                errors.name = value.length < 3 
                ? 'Username must contain at least 3 characters' : ''
                break;
            case 'email':
                errors.email = emailRegex.test(value) 
                ? '' : 'Please enter valid email address';
                break;
            case 'password':
                errors.password = value.length < 6
                ? 'Your password must contain at least 6 characters' : '';
                break;
            case 'passwordConfirmation':
                errors.passwordConfirmation = (!this.state.password || !this.state.passwordConfirmation) || value !== this.state.password 
                ? 'Passwords do not match' : '';
                break;
            default: break;
        }

        this.setState({errors, [name]: value});
    }

    isFormValid() {
        return this.validateForm(this.state.errors);
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.passwordConfirmation
        }
        if (this.isFormValid()) {
            try {
                const response = async() => await register(user);
                if (response) {
                    this.props.history.push('/login');
                }
            } catch (error) {
                console.error(error);
            }
           
        } else {
            console.error('Error: Invalid form validation')
        }
    }
        
        render() {

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3">
                                    Register:
                                </h1>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" 
                                           name="name" 
                                           placeholder="Username" 
                                           className="form-control"
                                           value={this.state.name}
                                           onChange={this.onChange}/>
                                        {this.state.errors.name.length > 0 && 
                                           <span className='error'>{this.state.errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" 
                                           name="email" 
                                           placeholder="Email address" 
                                           className="form-control"
                                           value={this.state.email}
                                           onChange={this.onChange}/>
                                         {this.state.errors.email.length > 0 && 
                                           <span className='error'>{this.state.errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" 
                                           name="password" 
                                           placeholder="Password" 
                                           className="form-control"
                                           value={this.state.password}
                                           onChange={this.onChange}/>
                                       {this.state.errors.password.length > 0 && 
                                           <span className='error'>{this.state.errors.password}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Confirm password:</label>
                                    <input type="password" 
                                           name="passwordConfirmation" 
                                           placeholder="Confirm assword" 
                                           className="form-control"
                                           value={this.state.passwordConfirmation}
                                           onChange={this.onChange}/>
                                           {this.state.errors.passwordConfirmation.length > 0 && 
                                           <span className='error'>{this.state.errors.passwordConfirmation}</span>}
                                </div>
                                {this.isFormValid() ? 
                                <button type="submit" 
                                        data-toggle="modal"
                                        data-target="#regModal"
                                        className="btn btn-primary btn-block btn-lg"
                                        >
                                        Register
                                </button>
                                : <button className="btn btn-secondary btn-block btn-lg" disabled>Register</button>
                                }
                            </form>
                            <div className="col-md-6 mx-auto mt-1 text-center">
                                <Link to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

