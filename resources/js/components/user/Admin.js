import React, { Component } from "react";
import ShowAndManageAdminUsers from "./ShowAndManageAdminUsers";

export default class Admin extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                    <div className="lead text-center">
                        Display, edit admin privledges and manage users
                    </div>
                    <hr />
                    <ShowAndManageAdminUsers />
            </React.Fragment>
        );
    }
}
