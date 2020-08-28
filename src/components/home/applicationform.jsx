import React from 'react';
import logo2 from '../../assests/images/logo2.png';
import axios from 'axios'


const API_PATH = './serverside/submitemail.php';

class ApplicationForm extends React.Component {
   constructor(props) {
        super(props) 
        this.state = {
            name: "", 
            email: "",
            contact: "",
            country: "",
            reason: "",
        }
    }

    resetForm = () => {
        this.setState({
            name: "", 
            email: "",
            contact: "",
            country: "",
            reason: "",
            success: '',
            error: ''
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        let data = this.state;
        let {name,email,contact,country,reason} = data
        let fd = new FormData();
        fd.set('name', `${name}`);
        fd.set('email', `${email}`);
        fd.set('contact', `${contact}`);
        fd.set('country', `${country}`);
        fd.set('reason', `${reason}`);
        
        axios({
            method: 'post',
            url: API_PATH,
            data: fd,
            headers: {'Content-Type': 'multipart/form-data' }
        })
        .then( result => {
                this.resetForm();
            }
        )
        .then( () => {
            this.setState({
                success: 'Your application was successfully submitted'
            })
        })
        .catch(
            error => this.setState({
                error: 'Sorry Your application was unable to be submitted\nTyr again!!!'
            })
        )
    }

    render() {
        return (
            <form className="application-form__cnt" id='applicationForm' onSubmit={this.handleFormSubmit} method='POST'>
                <img src={logo2} alt="illuminati-Logo" className="application-form__cnt-logo" />
                <h1 className="application-form-title">JOIN THE ILLUMINATI</h1>
                <p className="application-form-title-sub">To begin, submit your information below</p>
                <input type="text" className="application-form__cnt-input" name="name" required value={this.state.name} onChange={e => this.setState({name: e.target.value})} placeholder="Enter Your Name" id='name'/>
                <input type="email" className="application-form__cnt-input" name="email" required value={this.state.email} onChange={e => this.setState({ email: e.target.value })} placeholder="Enter Your E-Mail" id='email' />
                <input type="tel" className="application-form__cnt-input" name="contact" required value={this.state.contact} onChange={e => this.setState({ contact: e.target.value })} placeholder="Enter Your Phone Number" id='contact'/>
                <input type="text" className="application-form__cnt-input" name="country" required value={this.state.country} onChange={e => this.setState({ country: e.target.value })} placeholder="Enter Your Country" id='country'/>
                <input type="text" className="application-form__cnt-input" name="reason" required value={this.state.reason} onChange={e => this.setState({ reason: e.target.value })} placeholder="Brief reason for contacting us" id='reason'/>
                <input className="learn-more submit" type="submit" value="SUBMIT" id='submit'/>
                <div id='deliveryMsg' value={this.state.success}></div>
            </form>
        )
    }
}

export default ApplicationForm;
