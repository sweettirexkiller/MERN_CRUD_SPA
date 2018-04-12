import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Message, Button, Icon, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addMeeting} from "../../store/actions/meetingActions";
import {DatetimeInput} from 'react-datetime-inputs';
import moment from "moment/moment";

@connect((state) => {
    return {
        added: state.meeting.added,
        adding: state.meeting.adding,
        errors: state.meeting.errors
    }
})

class Create extends Component {
    constructor() {
        super();
        //dumb state
        this.state = {
            meeting: {
                isbn: '',
                firstName: '',
                lastName: '',
                email: '',
                date: ''
            },
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDateTimeChange = this.onDateTimeChange.bind(this);
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
        this.props.dispatch(addMeeting(this.state.meeting));
    }

    onDateTimeChange = (date) => {
        let meeting = Object.assign({}, this.state.meeting);
        meeting.date = String(moment(date).format("YYYY-MM-DD HH:mm"));
        console.log(meeting.date);
        this.setState({meeting});

        if (!!this.props.errors['date']) {
            delete this.props.errors['date'];
        }
    }

    render() {
        const {firstName, lastName, email, date} = this.state.meeting;
        const {errors} = this.props;
        return (
            <Container style={{padding: '5em 0em'}}>
                <Message>
                    <Message.Header style={{textAlign: 'center '}}>
                        Add meeting
                    </Message.Header>
                    <Message.Content>
                        <Link to='/'>
                            <Button animated>
                                <Button.Content hidden>All</Button.Content>
                                <Button.Content visible>
                                    <Icon name='list'/>
                                </Button.Content>
                            </Button>
                        </Link>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field error={!!errors.firstName}>
                                <label>First Name</label>
                                <input type="text" name="firstName" placeholder="First Name" value={firstName}
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
                                {errors.email ? <Message negative floating content={errors.email.msg}></Message> : ''}
                            </Form.Field>
                            <Form.Field error={!!errors.date}>
                                <label>Date: {moment(date).format('YYYY-MM-DD HH:mm')} </label>
                                <DatetimeInput
                                    placeholder={'Choose Date'}
                                    onChange={this.onDateTimeChange}/>
                                {errors.date ? <Message negative floating content={errors.date.msg} style={{margin: '4.5em 0em 0em 0em'}}/> : ''}
                            </Form.Field>
                            <Button type="submit" style={{margin: '4em 0em 0em 0em'}}>Submit</Button>
                        </Form>
                    </Message.Content>
                </Message>
            </Container>
        );
    }
}

export default Create;