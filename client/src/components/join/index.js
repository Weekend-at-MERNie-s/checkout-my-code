
import css from './join.css'
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import dog from '../../assets/images/dog-cartoon.png'

const Join = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <>
            <div className="myForm">

                <form id="form" className="form-style">
                    <div>
                        <label htmlFor="name">Username:</label>
                        <input className="form-input" type="text" name="username" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="name">Github Username:</label>
                        <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input className="form-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email">Password:</label>
                        <input className="form-input" type="password" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label id="warn"className="form-check-label" for="gridCheck">
                        I acknowledge that this app is only for working code that can be improved, not for broken apps.
                        </label>
                    </div>
                    <div className="submit">
                        <button id="btn-submit" className="btn btn-light" data-testid="button" type="submit">Submit</button>
                    </div>


                </form>
                <img id="dog" style={{ height: "200px", width: "200px", left: 0 }} src={dog} alt="cute dog with glasses" />
            </div>



        </>
    )

}

export default Join;