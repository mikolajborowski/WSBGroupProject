import React, { Component } from "React";
import AddRss from "./AddRss";
import {Link} from "react-router-dom";
import GoBack from '../utils/GoBack';

export default class Rss extends Component {
    render() {
        return (
            <div className="container">
                <GoBack onClick={() => this.props.history.goBack()} /> 
                <div className="row jumbotron flex-column align-middle mt-5 mx-auto col-md-8">
                    <div className="lead text-center">Manage your RSS channel list</div>
                    <Link className="mx-auto" to="/rss-list">
                        <button className="btn btn-success btn-lg">
                            Show rss list
                        </button>
                    </Link>
                </div>
                <hr />
                <AddRss />
            </div>
        );
    }
}
