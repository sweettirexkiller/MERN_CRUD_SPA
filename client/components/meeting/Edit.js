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
            errors:{}
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
        const meeting = this.state.meeting;
        meeting[e.target.name] = e.target.value;

        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({errors, meeting});
        }else{
            this.setState({meeting});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const {isbn, firstName, lastName, email, date} = this.state.meeting;
        axios.put(`/api/meeting/${this.state.meeting._id}`, {isbn, firstName, lastName, email, date})
            .then((result) => this.props.history.push(`/show/${this.state.meeting._id}`))
            .catch((error) => this.setState({errors: error.response.data.errors}));
    }

    handleCalendarChange = (date) => {
        const meeting = this.state.meeting;
        meeting.date = date;
        this.setState({meeting});
        if(!!this.state.errors['date']){
            let errors = Object.assign({}, this.state.errors);
            delete errors['date'];
            this.setState({errors});
        }
    };


    render() {
        const {firstName, lastName, email, date} = this.state.meeting;
        const {errors} = this.state;

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
                                        {errors.firstName ? <Message negative floating content={errors.firstName.msg}></Message> : ''}
                                    </Form.Field>
                                    <Form.Field error={!!errors.lastName}>
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" placeholder="Last Name" value={lastName}
                                               onChange={this.onChange}/>
                                        {errors.lastName ? <Message negative floating content={errors.lastName.msg}></Message> : ''}

                                    </Form.Field>
                                    <Form.Field error={!!errors.email}>
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Last Name" value={email}
                                               onChange={this.onChange}/>
                                        {errors.email ? <Message negative floating content={errors.email.msg}></Message> : ''}

                                    </Form.Field>
                                    <Form.Field error={!!errors.date}>
                                        <label>Date</label>
                                        <DateTime onChange={this.handleCalendarChange} value={date}/>
                                        {errors.date ? <Message negative floating content={errors.date.msg}></Message> : ''}
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