import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import mailbox from '../../assets/images/mailbox.png'


const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }


            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <div id='contact'>
            <h1 className='sectionName'>Contact me</h1>
            <div>
                <img className='mailbox' src={mailbox} alt='mailbox' />
            </div>
            <div className='container'>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div className='col-75'>
                            <input type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder='Your Name' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div className='col-75'>
                            <input type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder='Your Email' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor="message">Message:</label>
                        </div>
                        <div className='col-75'>
                            <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder='Write your message.' />
                        </div>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <div className='row'>
                    <button className="contactB" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    );
};

export default ContactForm;