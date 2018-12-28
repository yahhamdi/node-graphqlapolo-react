import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import FormUser from '../adduser/FormUser';
import UPDATE_USER from '../../../graphql/mutation/user/UpdateUser';

const UpdateUser = ({ user }) => (
  <Mutation mutation={UPDATE_USER}>
    {(updateUser) => <FormUser user={user} onSubmit={updateUser} />}
  </Mutation>
);
UpdateUser.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UpdateUser;
