import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container, Message, Button, Icon, Form} from 'semantic-ui-react';
import DateTime from 'react-datetime';


class Create extends Component {
    constructor() {
        super();
        this.state = {
            isbn: '',
            firstName: '',
            lastName: '',
            email: '',
            date: new Date(),
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit(e) {
        e.preventDefault();
        const {isbn, firstName, lastName, email, date} = this.state;
        axios.post('/api/meeting', {isbn, firstName, lastName, email, date})
            .then((result) => this.props.history.push('/'))
            .catch((error) => this.setState({errors: error.response.data.errors}));
    }

    handleCalendarChange = date => this.setState({date});

    render() {
        const {firstName, lastName, email,errors} = this.state;
        return (
            <Container style={{padding: '5em 0em'}}>
                {/*<Message negative>*/}
                    {/*{Object.keys(errors).forEach((key) => (<p> {errors[key].msg} </p>))}*/}
                {/*</Message>*/}
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
                            <Form.Field>
                                <label>First Name</label>
                                <input type="text" name="firstName" placeholder="First Name" value={firstName}
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
                                <DateTime onChange={this.handleCalendarChange}/>
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