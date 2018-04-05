import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../styles/App.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meetings: []
        };
    }

    componentDidMount() {
        axios.get('/api/book')
            .then(res => {
                this.setState({meetings: res.data});
                console.log(this.state.meetings);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="message">
                    <div className="message-header">
                        <h3>Your Meetings</h3>
                    </div>
                    <div className="message-body">
                        <h4>
                            <Link to="/create">
                                Add Meeting
                                <span className="icon"><i className="fas fa-plus"/></span>
                            </Link>
                        </h4>
                        <table className="table is-striped">
                            <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>EMAIL</th>
                                <th>DATE</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.meetings.map(meeting =>
                                <tr>
                                    <td><Link to={`/show/${meeting._id}`}>{meeting.isbn}</Link></td>
                                    <td>{meeting.firstName}</td>
                                    <td>{meeting.lastName}</td>
                                    <td>{meeting.email}</td>
                                    <td>{meeting.date}</td>
                                </tr>
                            )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
