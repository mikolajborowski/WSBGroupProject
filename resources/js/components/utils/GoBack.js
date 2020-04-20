import React, {Component} from 'react';

export default class GoBack extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row mr-5">
                    <a
                        role="button"
                        className="go-back mr-5 mt-3"
                        onClick={this.props.onClick}
                    >
                        <u>Go back</u>
                    </a>
                </div>
        )
    }
}