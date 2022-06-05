import Auth from '../../utils/auth';
import css from '../../components/join/join.css'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations'


const Login = () => {


  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.login.token);
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <main className="">
        <div className="login">
          <form className="form-style" id="login"
            onSubmit={handleFormSubmit}>
            <h5 style={{
              color: "#774c2a",
              textAlign: "center",
              paddingBottom: "8px"
            }}>Welcome Back! </h5>
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
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />

            <div className="submit">
              <button id="btn-submit" className="btn btn-light" data-testid="button" type="submit">
                Login
              </button>
            </div>
          </form>
          {/* <img id="dog" style={{ height: "200px", width: "200px", left: 0 }} src={dog} alt="cute dog with glasses" /> */}
        </div>

        {error && <div>Sig in failed</div>}




      </main>

    </>
  )

}

export default Login;