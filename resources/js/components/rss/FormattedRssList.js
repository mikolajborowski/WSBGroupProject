import React, { Component } from "react";
import GoBack from "../utils/GoBack";
import { getChannelsHTML } from "../../api/rss";
import Loading from "../utils/Loading";

export default class FormattedRssList extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            data: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        getChannelsHTML().then(data => {
            if (data) {
                this.setState({ data, loading: false });
            }
        });
    }

    render() {
        const innerHtml = { __html: this.state.data };

        if (this.state.loading) {
            return <Loading />;
        } else {
            return (
                <React.Fragment>
                    <GoBack onClick={() => this.props.history.goBack()} />
                    <div className="container">
                        <div className="row mt-5 mb-5">
                            <div className="card mb-3">
                                <div className="card-header">
                                    HTML Formatted Channels
                                </div>
                                <div className="card-text overflow-hidden">
                                    <div className="mt-3"
                                        dangerouslySetInnerHTML={innerHtml}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
