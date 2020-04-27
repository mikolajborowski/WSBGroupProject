import React, { Component } from "react";
import { renameGroup } from '../../api/channels-group';
export default class EditGroupTitle extends Component {
    constructor() {
        super();
        this.state = {
            newName: '',
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
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

    handleClick() {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
        })
	}

    render() {
        return (
            <div className="">
                <button className="btn btn-small btn-sm btn-info" onClick={() => this.handleClick()}>edit title</button>
                {this.state.isToggleOn ? (
                    <div className="input-group">
                        <input type="text" value={this.state.newName} onChange={(event) => this.onChangeFn(event)} name="newName" className="form-control" placeholder="type here" />
                        <span className="input-group-btn">
                            <button className="btn btn-small btn-sm btn-success" onClick={() => this.changeGroupTitle()} type="button">Edit</button>
                        </span>
                    </div>
                ) : (null)}
                
            </div>
        );
    }
}
