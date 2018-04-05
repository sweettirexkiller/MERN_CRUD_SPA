import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Message, Table} from 'semantic-ui-react';
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
            <Container text>
                <Message>

                    <Message.Header>
                        Your Meetings
                    </Message.Header>

                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>ISBN</Table.HeaderCell>
                                <Table.HeaderCell>FIRST NAME</Table.HeaderCell>
                                <Table.HeaderCell>LAST NAME</Table.HeaderCell>
                                <Table.HeaderCell>EMAIL</Table.HeaderCell>
                                <Table.HeaderCell>DATE</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.meetings.map(meeting => (
                                <Table.Row>
                                    <Table.Cell><Link to={`/show/${meeting._id}`}>{meeting.isbn}</Link></Table.Cell>
                                    <Table.Cell>{meeting.firstName}</Table.Cell>
                                    <Table.Cell>{meeting.lastName}</Table.Cell>
                                    <Table.Cell>{meeting.email}</Table.Cell>
                                    <Table.Cell>{meeting.date}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Message>
            </Container>
        );
    }
}

export default App;
