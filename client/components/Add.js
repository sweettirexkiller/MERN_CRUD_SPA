import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Form from '../modules/form';

let queryString = require('querystring');

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            form: new Form({
                firstName: '',
                lastName: '',
                date: '',
                email: '',
            }),
            modalOpen: false
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.insertNewEvent = this.insertNewEvent.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal() {
        this.setState({
            modalOpen: true
        })
    }

    closeModal() {
        this.setState({
            modalOpen: false,
            firstName: '',
            lastName: '',
            date: '',
            email: '',
            serverMessage: '',
        })
    }

    componentDidMount() {
        this.setState({
            date: this.props.currentDate
        })
    }

    handleSelectChange(e) {
        if(e.target.name == 'date'){
            this.setState({
                date: e.target.value
            })
        }
    }

    onClick(e) {
        this.state.form.submit('POST', '/insert')
            .then(data=>alert('asd'))
            .catch(error=>alert('asd'));
    }

    handleTextChange(){

    }
    render(){

    }
}

export default Add;