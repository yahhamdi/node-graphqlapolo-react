import React from 'react';
import { Mutation } from 'react-apollo';
import FormUser from './FormUser';
import ADD_USER from '../../../graphql/mutation/user/AddUser';

const AddUser = () => (
  <div className="app">
    <header>
      <h2 className="section-title">New user</h2>
    </header>
    <table cellPadding="0" cellSpacing="0" border="0">
      <div>
        <Mutation mutation={ADD_USER}>
          {(createUser) => <FormUser onSubmit={createUser} />}
        </Mutation>
      </div>
    </table>
  </div>
);
export default AddUser;
