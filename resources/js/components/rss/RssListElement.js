import React, { Component } from "react";

export default class RssListElement extends Component {
    constructor() {
        super();
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
                    className="btn btn-remove btn-sm btn-danger"
                    data-rssid={this.props.id}
                >
                    Remove
                </button>
            </li>
        );
    }
}
