import React, { Component } from "react";
import { renameGroup } from '../../api/channels-group';
export default class EditGroupTitle extends Component {
    constructor() {
        super();
        this.state = {
            newName: '',
            showInput: true
        };
    }

    changeGroupTitle() {
        let formData = new FormData()
        formData.append('new_name', this.state.newName)
        formData.append('group_id', this.props.groupId)
        renameGroup(formData).then(response => {
            if (response) {
                console.log('response', response)
            }
        });
        this.setState.newName = ''
        this.props.refreshCallback()
    }

    onChangeFn(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    toggleShow() {
        console.log('changed', this.state.showInput)
        this.state.showInput = !this.state.showInput
        console.log('changed', this.state.showInput)
        
    }

    render() {
        return (
            <div className="row">
                <div className="input-group">
                    <input type="text" value={this.state.newName} onChange={(event) => this.onChangeFn(event)} name="newName" className="form-control" placeholder="type here" />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-edit-title" onClick={() => this.changeGroupTitle()} type="button">Edit group name</button>
                    </span>
                </div>
            </div>
        );
    }
}
