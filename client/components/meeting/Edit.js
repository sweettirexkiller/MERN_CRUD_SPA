import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Message, Button, Icon, Form, Grid, Segment, Dimmer, Loader} from 'semantic-ui-react';
import {DatetimeInput} from 'react-datetime-inputs';
import moment from "moment";
import {connect} from 'react-redux'
import {fetchMeeting, updateMeeting} from "../../store/actions/meetingActions";


@connect((state) => {
    return {
        meeting: state.meeting.meeting,
        fetching: state.meeting.fetching,
        fetched: state.meeting.fetched,
        updated: state.meeting.updated,
        updating: state.meeting.updating,
        errors: state.meeting.errors
    }
})
class Edit extends Component {
    constructor() {
        super();
        this.state = {
            meeting: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDateTimeChange = this.onDateTimeChange.bind(this);
    }


    componentDidMount() {
        this.props.dispatch(fetchMeeting(this.props.match.params.id));
    }

    onChange(e) {
        const meeting = Object.assign({}, this.state.meeting);
        meeting[e.target.name] = e.target.value;
        this.setState({meeting});

        if (!!this.props.errors[e.target.name]) {
            delete this.props.errors[e.target.name];
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(updateMeeting(this.state.meeting))
    }

    onDateTimeChange = (date) => {
        let meeting = Object.assign({}, this.state.meeting);
        meeting.date = String(moment(date).format("YYYY-MM-DD HH:mm"));
        this.setState({meeting});

        if (!!this.props.errors['date']) {
            delete this.props.errors['date'];
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.meeting) {
            const meeting = nextProps.meeting;
            this.setState({meeting});
        }
    }


    render() {
        const {meeting, fetching, errors} = this.props;

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

        const {firstName, lastName, email, date} = this.state.meeting;

        return (
            <Container style={{padding: '5em 0em'}}>
                <Message>
                    <Message.Header style={{textAlign: 'center'}}>
                        Edit Meeting
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
                                <Link to={`/show/${this.state.meeting._id}`}>
                                    <Button animated floated='left'>
                                        <Button.Content hidden>Show</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='info circle'/>
                                        </Button.Content>
                                    </Button>
                                </Link>
                            </Grid.Row>

                            <Grid.Row>
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Field error={!!errors.firstName}>
                                        <label>First Name</label>
                                        <input type="text" name="firstName" placeholder="First Name"
                                               value={firstName}
                                               onChange={this.onChange}/>
                                        {errors.firstName ?
                                            <Message negative floating content={errors.firstName.msg}></Message> : ''}
                                    </Form.Field>
                                    <Form.Field error={!!errors.lastName}>
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" placeholder="Last Name" value={lastName}
                                               onChange={this.onChange}/>
                                        {errors.lastName ?
                                            <Message negative floating content={errors.lastName.msg}></Message> : ''}

                                    </Form.Field>
                                    <Form.Field error={!!errors.email}>
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Email" value={email}
                                               onChange={this.onChange}/>
                                        {errors.email ?
                                            <Message negative floating content={errors.email.msg}></Message> : ''}

                                    </Form.Field>
                                    <Form.Field error={!!errors.date}>
                                        <label>Date: {moment(date).isValid() ? moment(date).format('YYYY-MM-DD HH:mm') : 'not chosen'} </label>
                                        <DatetimeInput
                                            placeholder={'Choose Date'}
                                            onChange={this.onDateTimeChange}/>
                                        {errors.date ? <Message negative floating content={errors.date.msg}/> : ''}
                                    </Form.Field>
                                    <Button type="submit" style={{margin: '4em 0em 0em 0em'}}>Submit</Button>
                                </Form>
                            </Grid.Row>
                        </Grid>

                    </Message.Content>
                </Message>
            </Container>
        );
    }
}

export default Edit;