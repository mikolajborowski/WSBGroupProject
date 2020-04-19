import React, { Component } from "React";
import { getChannelsList, deleteChannel } from "../../api/rss";
import GoBack from "../utils/GoBack";
import Loading from "../utils/Loading";
import RssListElement from "./RssListElement";

export default class ManageRss extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onClickDeleteRss = this.onClickDeleteRss.bind(this);
    }
    componentDidMount() {
        getChannelsList().then(response => {
            if (response) {
                const data = response.data;
                const dataArray = [];
                Object.keys(data).forEach(key => {
                    dataArray.push(data[key]);
                });
                this.setState({ data, loading: false });
            }
        });
    }

    onClickDeleteRss(event) {
        event.persist();
        const { dataset } = event.target;
        const id = dataset.rssid;
        const newData = this.state.data.filter(item => item.id !== id);
        deleteChannel(id);
        this.setState({data: newData})
    }


    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        const showRssList = this.state.data
            ? this.state.data.map(item => {
                  return (
                      <RssListElement
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          link={item.link}
                          onClick={this.onClickDeleteRss}
                      />
                  );
              })
            : null;

        if (this.state.loading) {
            return <Loading />;
        } else {
            return (
                <React.Fragment>
                    <GoBack onClick={() => this.props.history.goBack()} />
                    <div className="row col-md-12 mt-5 mx-auto">
                        <div className="card mx-auto mb-5 col-md-12 mt-3">
                            <div
                                className="card-header text-center"
                                onClick={this.onSubmit}
                            >
                                Links
                            </div>
                            <div className="card-text mb-3">
                                <ul className="list-group list-group-flush">
                                    {showRssList}
                                </ul>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row col-sm-8 mx-auto"></div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
