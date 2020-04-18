import React, { Component } from "React";
import { postChannel, getChannelsList, deleteChannel } from "../../api/rss";
import FormValidationService from "../services/formValidationService";

export default class AddRss extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            link: "",
            errors: {
                name: "",
                link: ""
            }
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const { name, value } = event.target;
        const errors = this.state.errors;

        switch (name) {
            case "name":
                errors.name =
                    value.length < 1
                        ? FormValidationService.validationMessage.rssNameLenght
                        : "";
                break;
            case "link":
                errors.link = FormValidationService.validationRegex.url.test(
                    value
                ) ? ""
                    : FormValidationService.validationMessage.rssURL;
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    isFormValid() {
        const allFilled = FormValidationService.checkEmptyFields(
            ["name", "link"],
            this.state
        );
        const noErrors = FormValidationService.checkFormErrors(
            this.state.errors
        );
        return allFilled && noErrors;
    }

    onSubmit(event) {
        event.preventDefault();
        const channels = {
            name: this.state.name,
            link: this.state.link
        };

        if (this.isFormValid()) {
            postChannel(channels)
                .then(response => {
                    if (response) {
                        alert("Rss channel succesfully added to list");
                    }
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row col-md-11 mt-3 mx-auto">
                    <div className="card mx-auto col-md-10 mt-3">
                        <div className="card-header text-center">
                            Add new RSS
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <form
                                    noValidate
                                    onSubmit={this.onSubmit}
                                    style={{ width: "100%" }}
                                >
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Rss name"
                                            name="name"
                                            onChange={this.onChange}
                                        />
                                        {this.state.errors.name.length > 0 && (
                                            <span className="error">
                                                {this.state.errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="link">URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="link"
                                            placeholder="Rss link"
                                            name="link"
                                            onChange={this.onChange}
                                        />
                                        {!!this.state.errors.link !== '' && (
                                            <span className="error">
                                                {this.state.errors.link}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group text-center">
                                        {this.isFormValid() ? (
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-secondary btn-lg"
                                                disabled
                                            >
                                                Save
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
