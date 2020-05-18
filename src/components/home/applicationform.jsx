import React from 'react';
import logo2 from '../../assests/images/logo2.png';

function ApplicationForm() {
    let [name, setName ] = React.useState(''),
    [email, setEmail] = React.useState(''),
    [contact, setContact] = React.useState('');


    return(
        <section className="application-form">
            <form action="#" className="application-form__cnt">
                <img src={logo2} alt="Logo" className="application-form__cnt-logo"/>
                <h2 className="application-form-title">JOIN THE ILLUMINATI</h2>
                <p className="application-form-title-sub">To begin, submit your information below</p>
                <input type="text" className="application-form__cnt-input" require value={name} onChange={e => setName(e.target.value)} placeholder="Enter Your Name"/>
                <input type="email" className="application-form__cnt-input" require value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Your E-Mail"/>
                <input type="tel" className="application-form__cnt-input" require value = {contact} onChange={e => setContact(e.target.value)} placeholder="Enter Your Phone Number"/>
                <input className="learn-more submit" type="submit" value="SUBMIT" />
            </form>
        </section>
    )
}

export default ApplicationForm;
