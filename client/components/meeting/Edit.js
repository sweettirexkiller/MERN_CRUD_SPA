import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container, Message, Button, Icon, Form, Grid} from 'semantic-ui-react';
import DateTime from 'react-datetime';
import moment from "moment";

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            meeting: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCalendarChange = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/meeting/${this.props.match.params.id}`)
            .then(res => {
                this.setState({meeting: res.data});
                console.log(this.state.meeting);
            })
    }

    onChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit(e) {
        e.preventDefault();
        const {isbn, firstName, lastName, email, date} = this.state.meeting;
        axios.put(`/api/meeting/${this.state.meeting._id}`, {isbn, firstName, lastName, email, date})
            .then((result) => this.props.history.push(`/show/${this.state.meeting._id}`))
            .catch((result) => console.log(result));
    }

    handleCalendarChange(date) {
        const meeting = this.state.meeting;
        meeting.date = date;
        this.setState({meeting});
    }


    render() {
        const {isbn, firstName, lastName, email, date} = this.state.meeting;
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
                                    <Form.Field>
                                        <label>First Name</label>
                                        <input type="text" name="firstName" placeholder="First Name"
                                               value={firstName}
                                               onChange={this.onChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" placeholder="Last Name" value={lastName}
                                               onChange={this.onChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Last Name" value={email}
                                               onChange={this.onChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Date</label>
                                        <DateTime onChange={this.handleCalendarChange} value={ Date.parse(date)}/>
                                    </Form.Field>
                                    <Button type="submit">Submit</Button>
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