import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Message, Button, Icon, List, Grid, Segment, Dimmer, Loader} from 'semantic-ui-react';
import moment from "moment/moment";
import {connect} from 'react-redux';
import {fetchMeeting, deleteMeeting, resetMeetingState} from "../../store/actions/meetingActions";


@connect((state) => {
    return {
        meeting: state.meeting.meeting,
        fetching: state.meeting.fetching,
        fetched: state.meeting.fetched,
        deleting: state.meeting.deleting,
        deleted: state.meeting.deleted
    }
})
class Show extends Component {
    constructor() {
        super();
        this.state = {
            meeting: {}
        }
    }

    componentWillMount() {
        this.props.dispatch(fetchMeeting(this.props.match.params.id))
    }

    delete(id) {
        this.props.dispatch(deleteMeeting(id));
    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.meeting) {
            const meeting = nextProps.meeting;
            this.setState({meeting});
        }
    }


    render() {
        const {meeting, fetching} = this.props;

        if (fetching && !meeting.length) {
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
                        Meeting
                    </Message.Header>

                    <Message.Content>
                        <Grid padded>
                            <Grid.Row>
                                <Link to='/'>
                                    <Button animated floated='left'>
                                        <Button.Content hidden>All</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='list'/>
                                        </Button.Content>
                                    </Button>
                                </Link>
                                <Link to={`/edit/${this.state.meeting._id}`}>
                                    <Button animated floated='left'>
                                        <Button.Content hidden>Edit</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='settings'/>
                                        </Button.Content>
                                    </Button>
                                </Link>
                                <Button animated floated='right' color='orange'
                                        onClick={this.delete.bind(this, this.state.meeting._id)}>
                                    <Button.Content hidden>Delete</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='trash'/>
                                    </Button.Content>
                                </Button>
                            </Grid.Row>

                            <Grid.Row>
                                <List>
                                    <List.Item icon={'user'}
                                               content={`You meet ${this.state.meeting.firstName} ${this.state.meeting.lastName}`}/>
                                    <List.Item icon='mail' content={`${this.state.meeting.email}`}/>
                                    <List.Item icon='calendar'
                                               content={`${moment(this.state.meeting.date).format("YYYY-MM-DD HH:mm")}`}/>
                                </List>
                            </Grid.Row>
                        </Grid>

                    </Message.Content>
                </Message>
            </Container>
        );
    }
}

export default Show;