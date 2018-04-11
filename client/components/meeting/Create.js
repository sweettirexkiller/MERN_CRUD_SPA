import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container, Message, Button, Icon, Form} from 'semantic-ui-react';
import DateTime from 'react-datetime';
import {connect} from 'react-redux';
import {addMeeting} from "../../store/actions/meetingActions";
import moment from "moment";

@connect((state)=>{
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
        this.handleSelect = this.handleSelect.bind(this);
    }

    onChange(e) {
        const meeting = this.state.meeting;
        meeting[e.target.name] = e.target.value;
        this.setState({meeting});

        if(!!this.props.errors[e.target.name]){
            delete this.props.errors[e.target.name];
        }
    }


    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(addMeeting(this.state.meeting));
    }

    handleSelect(date){
        const meeting = this.state.meeting;
        meeting['date'] = date.format("YYYY-MM-DD HH:mm");
        this.setState({meeting});

        if(!!this.props.errors['date']){
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
                                <input type="email" name="email" placeholder="Email" value={email}
                                       onChange={this.onChange}/>
                                {errors.email ? <Message negative floating content={errors.email.msg}></Message> : ''}
                            </Form.Field>
                            <Form.Field error={!!errors.date}>
                                <label>Date</label>
                                <DateTime value={date} onChange={this.handleSelect} inputProps={{
                                    value: moment(date).isValid() ? moment(date).format("YYYY-MM-DD HH:mm") : date,
                                    placeholder: 'Date',
                                    onChange: this.onChange,
                                    name: 'date'
                                }}/>
                                {errors.date ? <Message negative floating content={errors.date.msg}></Message> : ''}
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Message.Content>
                </Message>
            </Container>
        );
    }
}

export default Create;