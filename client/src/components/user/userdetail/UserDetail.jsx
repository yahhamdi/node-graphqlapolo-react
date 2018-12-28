import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import UpdateUser from '../updateuser';
import GET_USER_BY_ID from '../../../graphql/query/user/GetUserById';

const UserDetail = ({ match }) => (

  <div className="app">
    <header>
      <h2 className="section-title">Edit user</h2>
    </header>
    <Query
      query={GET_USER_BY_ID}
      variables={{
        id: match.params.id,
      }}
    >
      {({ data, loading }) => {
        if (loading) {
          return 'Loading...';
        }
        const { user } = data;
        return (
          <table border="0" cellPadding="0" cellSpacing="0">
            <div>
              <h1>Edit User</h1>
              <h1>{user.username}</h1>
              <UpdateUser user={user} />
            </div>
          </table>
        );
      }}
    </Query>
  </div>
);
UserDetail.propTypes = {
  match: PropTypes.object.isRequired,
};
export default UserDetail;
