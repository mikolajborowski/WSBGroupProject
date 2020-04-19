import React, { Component } from "react";
import { setAdmin } from "../../api/admin";
export default class SetUserAdmin extends Component {
    constructor() {
        super();
        this.state = {
            userId: 1
        };

        this.onChange = this.onChange.bind(this);
        this.onClickSetUserAdmin = this.onClickSetUserAdmin.bind(this);
    }

    onChange(event) {
        const { name, value } = event.target;
        const id = parseInt(value) || 1;
        this.setState({ [name]: id });
    }

    onClickSetUserAdmin(event) {
        event.preventDefault();
        setAdmin(this.state.userId).then(response => alert(response.data));
    }

    render() {
        return (
            <div>
                <div className="lead text-center">Add new admin privledges</div>
                <hr />
                <div className="d-flex justify-content-center align-items-center">
                    <div>User ID:</div>
                    <div className="input-group col-sm-4 flex-column">
                        <input
                            type="number"
                            min="1"
                            name="userId"
                            className="form-control"
                            placeholder="ID"
                            aria-label="UserId"
                            aria-describedby="basic-addon1"
                            onChange={this.onChange}
                        />
                    </div>
                    <button
                        onClick={this.onClickSetUserAdmin}
                        className="btn btn-small btn-primary btn-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}
