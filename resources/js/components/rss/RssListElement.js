import React, { Component } from "react";

export default class RssListElement extends Component {
    constructor() {
        super();
        const groupIdtoPass = '1';
    }

    change(id) {
        this.groupIdtoPass = id;
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
                <div className="d-flex">
                    <select className="custom-select select-max" onChange={e => this.change(e.target.value)}>
                        {this.props.groupList.map((item,index )=> (
                            <option key={item.group_id} value={item.group_id} >{item.group_name}</option>
                        ))}
                    </select>
                    <button
                        onClick={() => this.props.onClickAddToGroup(event, this.groupIdtoPass, this.props.id)}
                        className="btn btn-small btn-sm btn-danger"
                    >
                        add channel to group
                    </button>
                </div>
            </li>
        );
    }
}
