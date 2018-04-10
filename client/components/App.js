import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Message, Table, Button, Icon, Grid} from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchMeetings} from "../store/actions/meetingActions";
import '../styles/App.scss';

@connect((store)=>{
    return {
        meetings: store.meeting.meetings
    }
})
class App extends Component {

    componentWillMount() {
        this.props.dispatch(fetchMeetings())

        // axios.get('/api/meeting')
        //     .then(res => {
        //         this.setState({meetings: res.data});
        //         console.log(this.state.meetings);
        //     });
    }


    render() {
        console.log(this.props);
        return (
            <Container style={{padding: '5em 0em'}}>
                <Message>
                    <Message.Header style={{textAlign: 'center'}}>
                        Your Meetings
                    </Message.Header>
                    <Message.Content>
                        <Link to='/create'>
                            <Button animated>
                                <Button.Content hidden>Add</Button.Content>
                                <Button.Content visible>
                                    <Icon name='plus'/>
                                </Button.Content>
                            </Button>
                        </Link>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ISBN</Table.HeaderCell>
                                    <Table.HeaderCell>FIRST NAME</Table.HeaderCell>
                                    <Table.HeaderCell>LAST NAME</Table.HeaderCell>
                                    <Table.HeaderCell>EMAIL</Table.HeaderCell>
                                    <Table.HeaderCell>DATE</Table.HeaderCell>
                                    <Table.HeaderCell>ACTIONS</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {this.props.meetings.map(meeting => (
                                    <Table.Row>
                                        <Table.Cell><Link
                                            to={`/show/${meeting._id}`}>{meeting._id}</Link></Table.Cell>
                                        <Table.Cell>{meeting.firstName}</Table.Cell>
                                        <Table.Cell>{meeting.lastName}</Table.Cell>
                                        <Table.Cell>{meeting.email}</Table.Cell>
                                        <Table.Cell>{meeting.date}</Table.Cell>
                                        <Table.Cell>
                                            <Link to={`/show/${meeting._id}`}>
                                                <Button animated>
                                                    <Button.Content hidden>Show</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='info circle'/>
                                                    </Button.Content>
                                                </Button>
                                            </Link>
                                            <Link to={`/edit/${meeting._id}`}>
                                                <Button animated floated='left' color='green'>
                                                    <Button.Content hidden>Edit</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='settings'/>
                                                    </Button.Content>
                                                </Button>
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Message.Content>
                </Message>
            </Container>
        );
    }
}

export default App;
