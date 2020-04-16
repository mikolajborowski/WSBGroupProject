import React, {Component } from 'React';
import {Link, withRouter} from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Rss App</h1>
                        <p className="lead text-center">WSB University Group Project</p>
                        <hr className="my-4" />
                        <p>Backend: Mikołaj Borowski</p>
                        <p>Front-end: Igor Grzesista, Marta Gorlicka</p>
                        <p>Testing: Anna Burzyńska</p>
                        <p>Documentation: Weronika Sielicka</p>
                    </div>
                    <div className="col-sm-8 mx-auto text-center">
                        <Link to="/rss"><button className="text-center btn btn-lg btn-info">Go to rss page</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
