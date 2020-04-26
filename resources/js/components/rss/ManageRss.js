import React, { Component } from "React";
import { getChannelsList, deleteChannel } from "../../api/rss";
import GoBack from "../utils/GoBack";
import Loading from "../utils/Loading";
import RssListElement from "./RssListElement";
import { addGroup, renameGroup, addChannelToGroup, getAllGroups, deleteChannelFromGroup, deleteGroup } from '../../api/channels-group';

export default class ManageRss extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
            group: '',
            groupList: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onClickDeleteRss = this.onClickDeleteRss.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addRssGroup = this.addRssGroup.bind(this);
        this.getChannelGroups = this.getChannelGroups.bind(this);
        this.addChannelToGroupFn = this.addChannelToGroupFn.bind(this);
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
        this.getChannelGroups()   
    }

    deleteGroupFn(id) {
        // let formData = new FormData();
     
        // formData.append('channel_group_id', id)
        // deleteGroup(formData)
        this.getChannelGroups()
    }

    getChannelGroups() {
        getAllGroups().then(response => {
            if (response) {
                const data = response.data;
            
                this.setState({ groupList: data })
                console.log('channel groups', this.state.groupList)
            }
        });
    }

    addChannelToGroupFn(event, groupID, channelID) {
        const data = {
            group_id: groupID,
            channel_id: channelID
        }
       
        addChannelToGroup(data).then(response => {
            if (response) {
                console.log('response', response)
            } else {
                this.notifyError()
            }
        });
        this.getChannelGroups()
    }

    onClickDeleteRss(event) {
        event.persist();
        const { dataset } = event.target;
        const id = dataset.rssid;
    
        console.log('delete channel', typeof id) 
        const newData = this.state.data.filter(item => item.id !== id);
        deleteChannel(id);
        this.setState({data: newData})
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
    }

    addRssGroup() {
        const name = {
            name: this.state.group
        }
        addGroup(name).then(response => {
            if (response) {
                console.log('response', response)
            } else {
                this.notifyError()
            }
        });
        this.setState.group = '';
        this.getChannelGroups()
    }

    removeChannelFromGroupFn(dataToRemove) {
        const remove = {
            id_of_group_record: dataToRemove.id_of_group_record
        }
        deleteChannelFromGroup(dataToRemove.id_of_group_record).then(response => {
            if (response) {
                console.log('response', response)
            } else {
                this.notifyError()
            }
        })
        this.getChannelGroups()
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
                          onClickAddToGroup={this.addChannelToGroupFn}
                          groupList={this.state.groupList}
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
                    <div className="row col-md-12 mt-5 mx-auto">
                        <h2>List Groups:</h2>
                        <input type="text" 
                                           name="group" 
                                           placeholder="Group name" 
                                           className="form-control"
                                           onChange={this.onChange}/>
                        <button
                            onClick={this.addRssGroup}
                            className="btn btn-small btn-sm btn-danger"
                        >
                            Add RSS group
                        </button>
                        {this.state.groupList.map(item => (
                            <div key={item.group_id} className="row col-md-12 mt-5 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.group_name}</h5>
                                        <div className="row">
                                            <div className="input-group">
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="button">Go!</button>
                                                </span>
                                                <input type="text" className="form-control" placeholder="Search for..." />
                                            </div>
                                            <button className="btn btn-small btn-sm btn-danger">Edit group name</button>
                                        </div>
                                        <button
                                            onClick={() => this.deleteGroupFn(item.group_id)}
                                            className="btn btn-small btn-sm btn-danger"
                                        >
                                            X
                                        </button>

                                        <ul className="list-group list-group-flush">
                                            {item.channels.map(channelItem => (
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-column">
                                                <span className="lead text-capitalize">{channelItem.name}</span>
                                                <span className="mt-1 mr-4 text-break">{channelItem.link}</span>
                                                </div>
                                                <button
                                                    onClick={() => this.removeChannelFromGroupFn(channelItem)}
                                                    className="btn btn-small btn-sm btn-danger"
                                                >
                                                    Remove from group
                                                </button>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            );
        }
    }
}
