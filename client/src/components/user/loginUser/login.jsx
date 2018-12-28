import React from 'react';
import { Mutation } from 'react-apollo';
import FormLogin from './FormLogin';
import LOGIN_USER from '../../../graphql/mutation/user/LoginUser';

const LoginUser = () => (
  <div className="app">
    <header>
      <h2 className="section-title">Login user</h2>
    </header>
    <table cellPadding="0" cellSpacing="0" border="0">
      <div>
        <Mutation mutation={LOGIN_USER}>
          {(loginUser) => <FormLogin onSubmit={loginUser} />}
        </Mutation>
      </div>
    </table>
  </div>
);
export default LoginUser;
