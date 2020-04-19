import React, { Component } from "react";

export default class UserListElement extends Component {
    render() {
        return (
            <tr
                style={{ background: "transparent" }}
            >
                <td scope="row" className="lead">
                    {this.props.id}
                </td>
                <td className="lead">{this.props.name}</td>
                <td className="lead">{this.props.email}</td>
                <td className="lead">{this.props.admin}</td>
                <td className="d-flex justify-content-center">
                    <button
                        className="btn btn-teal btn-sm mr-2 btn-small"
                        data-userid={this.props.id}
                        onClick={this.props.onClickSetAsAdmin}
                    >
                        Set as admin
                    </button>
                    <button
                        className="btn btn-danger btn-sm btn-small"
                        data-userid={this.props.id}
                        onClick={this.props.onClickRemove}
                    >
                        Remove user
                    </button>
                </td>
            </tr>
        );
    }
}
