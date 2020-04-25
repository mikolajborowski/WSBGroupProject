import React, { Component } from "react";
import { getAdminList, deleteAdmin, setAdmin } from "../../api/admin";
import UserListElement from "./UserListElement";
import Loading from "../utils/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    notify (response) {
        toast(`${response}`)
    };

    onClickSetUserAdmin(event) {
        event.preventDefault();
        const { dataset } = event.target;
        const id = dataset.userid;

        setAdmin(id)
            .then(response => {
                alert(response.data);
                const users = JSON.parse(JSON.stringify(this.state.users));
                users.forEach(user => {
                    if (user.id === parseInt(id)) {
                        user.is_user_admin = "1";
                    }
                });
                this.setState({ users });
            })
            .catch(error => console.log(error));
    }

    onClickRemove(event) {
        event.preventDefault();
        const { dataset } = event.target;
        const id = dataset.userid;

        deleteAdmin(id)
            .then(response => {
                if (response) {
                    alert(response.data);
                    const users = this.state.users.filter(
                        user => user.id !== parseInt(id)
                    );
                    this.setState({ users });
                }
            })
            .catch(error => console.log(error));
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        const showUsers = this.state.users
            ? this.state.users.map(user => {
                  return (
                      <div>
                        <ToastContainer />
                        <UserListElement
                            key={user.id}
                            id={user.id}
                            admin={parseInt(user.is_user_admin)}
                            email={user.email}
                            name={user.name}
                            onClickSetAsAdmin={this.onClickSetUserAdmin}
                            onClickRemove={this.onClickRemove}
                        />
                      </div>
                  );
              })
            : null;

        if (this.state.loading) {
            return <Loading />;
        } else {
            return (
                <React.Fragment>
                    <div>
                        <ToastContainer />
                        <table
                            onSubmit={this.onSubmit}
                            style={{ background: "transparent" }}
                            className="table table-bordered table-hover"
                        >
                            <tbody>{showUsers}</tbody>
                        </table>
                    </div>
                </React.Fragment>
            );
        }
    }
}
