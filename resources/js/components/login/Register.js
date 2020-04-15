import React, {Component } from 'React';
import { register } from './LoginFunctions';

export class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    checkPasswordMatch(password, confirmation) {
        return (password && confirmation) && (password === confirmation);
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }

        if (this.checkPasswordMatch(this.state.password, this.state.password_confirmation)) {
            register(user).then(response => {
                if (response) {
                    this.props.history.push('/login')
                }
            })
        }
        
    }
        
        render() {
            return (
                <div class="container">
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
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" 
                                           name="email" 
                                           placeholder="Email address" 
                                           className="form-control"
                                           value={this.state.email}
                                           onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" 
                                           name="password" 
                                           placeholder="Password" 
                                           className="form-control"
                                           value={this.state.password}
                                           onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Confirm password:</label>
                                    <input type="password" 
                                           name="password_confirmation" 
                                           placeholder="Confirm assword" 
                                           className="form-control"
                                           value={this.state.password_confirmation}
                                           onChange={this.onChange}/>
                                </div>
                                <button type="submit" 
                                        className="btn btn-primary btn-block btn-lg">
                                        Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default register;