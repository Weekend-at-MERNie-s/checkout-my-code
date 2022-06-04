
import css from './join.css'
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import dog from '../../assets/images/dog-cartoon.png'
import Footer from '../footer';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

const Join = () => {

    const [formState, setFormState] = useState({
        username: '', email: '',
        password: '', userGithub: '',
    });

    const [addUser, { error }] = useMutation(ADD_USER);
    // const [isSubscribed, setIsSubscribed] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const { username, email, password, userGithub } = formState;


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(data)
        } catch (e) {
            console.error(e)
        }
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    
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

                <form onSubmit={handleSubmit} id="form" className="form-style">
                    <div>
                        <label htmlFor="name">Username:</label>
                        <input className="form-input" type="username" name="username" id="username" value={formState.username} onChange={handleChange} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="username">Github Username:</label>
                        <input className="form-input" type="userGithub" name="userGithub" id="userGithub" value={formState.userGithub}  onChange={handleChange}  onBlur={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input className="form-input" type="email" name="email" value={formState.email}  onChange={handleChange}  onBlur={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input className="form-input" type="password" name="password" value={formState.password}  onChange={handleChange}  onBlur={handleChange} />
                    </div>

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}

                    {/* <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                            onChange={handleSubmit} id="gridCheck" />
                        <label id="warn" className="form-check-label" htmlFor="gridCheck">
                            I acknowledge that this app is only for working code that can be improved, not for broken apps.
                        </label>
                    </div> */}
                    <div className="submit">
                        <button id="btn-submit" className="btn btn-light" data-testid="button" type="submit">Submit</button>
                    </div>


                </form>
                <img id="dog" style={{ height: "200px", width: "200px", left: 0 }} src={dog} alt="cute dog with glasses" />
            </div>
            {error && <div>Sign up failed</div>}

            <Footer />
        </>

    )

}

export default Join;