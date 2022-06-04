
import css from './join.css'
import React, { useState } from 'react';
import dog from '../../assets/images/dog-cartoon.png'
import Footer from '../footer';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


const Join = () => {


    const [formState, setFormState] = useState({
        username: '', email: '',
        password: '', userGithub: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            console.log(data);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    }
        return (
            <>
                <main className="">
                    <div className="myForm">

                        {/* <div className="card">
                        <h4 className="card-header">Sign Up</h4>
                        <div className="card-body"> */}
                        <form className="form-style" id="form" onSubmit={handleFormSubmit}>
                            <input
                                className="form-input"
                                placeholder="Your username"
                                name="username"
                                type="username"
                                id="username"
                                value={formState.username}
                                onChange={handleChange}
                            />

                            <input
                                className="form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className="form-input"
                                placeholder="Your user Github"
                                name="userGithub"
                                type="userGithub"
                                id="userGithub"
                                value={formState.userGithub}
                                onChange={handleChange}
                            />

                            <input
                                className="form-input"
                                placeholder="******"
                                name="password"
                                type="password"
                                id="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"
                                    id="gridCheck" />
                                <label id="warn" className="form-check-label" htmlFor="gridCheck">
                                    I acknowledge that this app is only for working code that can be improved, not for broken apps.
                                </label>
                            </div>
                            <div className="submit">
                                <button id="btn-submit" className="btn btn-light" data-testid="button" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                        <img id="dog" style={{ height: "200px", width: "200px", left: 0 }} src={dog} alt="cute dog with glasses" />
                    </div>

                    {error && <div>Signup failed</div>}




                </main>
                < Footer />
            </>
        )

    }

    export default Join;