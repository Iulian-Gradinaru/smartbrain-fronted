import React, { useState, useCallback, ChangeEvent, MouseEvent } from 'react';

import { RegisterProps } from './Register.types';

export const Register: React.FC<RegisterProps> = ({
  onRouteChange,
  loadUser,
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const onPasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const onSubmitSignIn = useCallback(
    (event: MouseEvent<HTMLInputElement>) => {
      event.preventDefault();

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
          if (user.id) {
            loadUser(user);
            onRouteChange('home');
          }
        });
    },
    [name, email, password, loadUser, onRouteChange]
  );

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
