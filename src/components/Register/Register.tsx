import React, { useState, useCallback, ChangeEvent, MouseEvent } from 'react';

/**
 * Imports types
 */
import { RegisterProps } from './Register.types';

/**
 * Displays the component
 */
export const Register: React.FC<RegisterProps> = (props) => {
  const { onRouteChange, loadUser } = props;

  /**
   * Initializes the name state
   */
  const [name, setName] = useState<string>('');

  /**
   * Initializes the email state
   */
  const [email, setEmail] = useState<string>('');

  /**
   * Initializes the password state
   */
  const [password, setPassword] = useState<string>('');

  /**
   * Callback function to handle name input change
   */
  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  /**
   * Callback function to handle email input change
   */
  const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  /**
   * Callback function to handle password input change
   */
  const onPasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  /**
   * Callback function to handle form submission
   */
  const onSubmitSignIn = useCallback(
    (event: MouseEvent<HTMLInputElement>) => {
      event.preventDefault();

      // Sending user registration data to the server
      fetch('http://localhost:3000/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          // If registration is successful, load user data and change route
          if (user.id) {
            loadUser(user);
            onRouteChange('home');
          }
        });
    },
    [name, email, password, loadUser, onRouteChange]
  );

  /**
   * JSX components for name input fields
   */
  const NameInput = (
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="name">
        Name
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="text"
        name="name"
        id="name"
        onChange={onNameChange}
      />
    </div>
  );

  /**
   * JSX components for email input fields
   */
  const EmailInput = (
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">
        Email
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="email"
        name="email-address"
        id="email-address"
        onChange={onEmailChange}
      />
    </div>
  );

  /**
   * JSX components for password input fields
   */
  const PasswordInput = (
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">
        Password
      </label>
      <input
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="password"
        name="password"
        id="password"
        onChange={onPasswordChange}
      />
    </div>
  );

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            {NameInput}
            {EmailInput}
            {PasswordInput}
          </fieldset>
          <div className="">
            <input
              onClick={onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
        </div>
      </main>
    </article>
  );
};
