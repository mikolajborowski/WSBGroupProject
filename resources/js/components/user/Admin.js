import React, {Component} from 'react';
import SetUserAdmin from './SetUserAdmin';


export default class Admin extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-6 mx-auto">
                       <SetUserAdmin />
                </div>
                <div className="text-center col-md-6 mx-auto">
                    {/* collapse list of user admins */}
                </div>
            </React.Fragment>
        )
    }
}