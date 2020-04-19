import React, { Component } from "react";
import { getAdminList, deleteAdmin, setAdmin } from "../../api/admin";
import UserListElement from "./UserListElement";
import Loading from "../utils/Loading";

export default class ShowAndManageAdminUsers extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            users: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onClickSetUserAdmin = this.onClickSetUserAdmin.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    componentDidMount() {
        getAdminList().then(users => {
            if (users) {
                this.setState({ users, loading: false });
            }
        });
    }

    getUserId(event) {
        const { dataset } = event.target;
        const id = dataset.userid;
        return id;
    }

    onClickSetUserAdmin(event) {
        event.preventDefault();
        const id = this.getUserId(event);
        setAdmin(id)
            .then(response => alert(response.data))
            .catch(error => alert("User with provided ID does not exist"));
    }

    onClickRemove(event) {
        event.preventDefault();
        const id = this.getUserId(event);
        deleteAdmin(id)
            .then(response => {
                if (response) {
                    const users = this.state.users.filter(
                        user => user.id !== id
                    );
                    this.setState({ users });
                    alert(response.data);
                }
            })
            .catch(error => console.log(error));
    }

    render() {
        const showUsers = this.state.users.map(user => {
            console.log(user)
            return (
                <UserListElement
                    key={user.id}
                    id={user.id}
                    admin={parseInt(user.is_user_admin) ? "admin" : "user"}
                    email={user.email}
                    name={user.name}
                    onClickSetAsAdmin={this.onClickSetUserAdmin}
                    onClickRemove={this.onClickRemove}
                />
            );
        });

        if (this.state.loading) {
            return <Loading />;
        } else {
            return (
                <div>
                    <table
                        style={{ background: "transparent" }}
                        className="table table-bordered table-hover"
                    >
                        <tbody>{showUsers}</tbody>
                    </table>
                </div>
            );
        }
    }
}
