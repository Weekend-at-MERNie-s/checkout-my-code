import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });

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
      <div className="myForm">

        <form id="form" className="form-style">
          <div>
            <label htmlFor="name">Name:</label>
            <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>

          <div>
            <label htmlFor="email">Email address:</label>
            <input className="form-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>


          <div>
            <label htmlFor="message">Message:</label>
            <textarea className="form-input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className="submit">
            <button id="btn-submit" className="btn btn-light" data-testid="button" type="submit">Submit</button>
          </div>
        </form>

      </div>
   

  );
}

export default Login;