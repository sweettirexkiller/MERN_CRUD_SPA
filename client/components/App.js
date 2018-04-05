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
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Your Meetings</h3>
                    </div>
                    <div className="panel-body">
                        <h4>
                            <Link to="/create">
                                <span className="glyphicone glyphicon-plus-sign" aria-hidden="true">Add Meeting</span>
                            </Link>
                        </h4>
                        <table className="table table-stripe">
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
