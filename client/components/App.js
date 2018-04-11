import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Message, Table, Button, Icon, Dimmer, Loader, Image, Segment} from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchMeetings} from "../store/actions/meetingActions";
import '../styles/App.scss';
import moment from "moment";

@connect((state) => {
    return {
        meetings: state.meeting.meetings,
        fetching: state.meeting.fetching,
        fetched: state.meeting.fetched
    }
})
class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchMeetings())
    }

    render() {
        const {meetings, fetching} = this.props;

        if (fetching && !meetings.length) {
            return (
                <Container style={{padding: '5em 0em'}}>
                    <Segment>
                        <Dimmer active inverted>
                            <Loader size='massive' inverted>
                                Loading
                            </Loader>
                        </Dimmer>
                    </Segment>
                </Container>
            )
        }
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
                                {meetings.map(meeting => (
                                    <Table.Row key={meeting._id}>
                                        <Table.Cell><Link
                                            to={`/show/${meeting._id}`}>{meeting._id}</Link></Table.Cell>
                                        <Table.Cell>{meeting.firstName}</Table.Cell>
                                        <Table.Cell>{meeting.lastName}</Table.Cell>
                                        <Table.Cell>{meeting.email}</Table.Cell>
                                        <Table.Cell>{moment(meeting.date).format("YYYY-MM-DD HH:mm")}</Table.Cell>
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
