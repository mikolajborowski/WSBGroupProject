import React, { Component } from "react";

export default class RssListElement extends Component {
    constructor() {
        super();
        this.state = {
            groupId: ''
        };
    }

    change(id) {
        console.log('event', id)
        this.setState.groupId = id
        console.log('event', this.setState.groupId)
    }

    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                <span className="lead text-capitalize">{this.props.name}</span>
                <span className="mt-1 mr-4 text-break">{this.props.link}</span>
                </div>
                <button
                    onClick={this.props.onClick}
                    className="btn btn-small btn-sm btn-danger"
                    data-rssid={this.props.id}
                >
                    Remove
                </button>
                <select className="custom-select" onChange={e => this.change(e.target.value)}>
                    {this.props.groupList.map(item => (
                        <option key={item.group_id} value={item.group_id} >{item.group_name}</option>
                    ))}
                </select>
                <button
                    onClick={() => this.props.onClickAddToGroup(this.state.groupId, this.props.id)}
                    className="btn btn-small btn-sm btn-danger"
                >
                    add channel to group
                </button>
            </li>
        );
    }
}
