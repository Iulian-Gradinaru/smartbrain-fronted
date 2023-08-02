import React, { useState, useCallback, ChangeEvent } from 'react';

import { SigninProps } from './Signin.types';

export const Signin: React.FC<SigninProps> = (props) => {
  const { onRouteChange, loadUser } = props;

  const [signInEmail, setSignInEmail] = useState<string>('');
  const [signInPassword, setSignInPassword] = useState<string>('');

  const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSignInEmail(event.target.value);
  }, []);

  const onPasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSignInPassword(event.target.value);
    },
    []
  );

  const onSubmitSignIn = useCallback(() => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange('home');
        }
      });
  }, [signInEmail, signInPassword, loadUser, onRouteChange]);

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
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange('register')}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};
