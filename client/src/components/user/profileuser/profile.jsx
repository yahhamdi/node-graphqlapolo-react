import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import GET_PROFILE_USER from '../../../graphql/query/user/GetProfileUser';

const ProfileUser = () => (
  <div className="app">
    <header>
      <h2 className="section-title">Profile User</h2>
    </header>

    <Query
      query={GET_PROFILE_USER}
      fetchPolicy="network-only"
      variables={{
        token: localStorage.getItem('token'),
      }}
    >
      {({ loading, data: { getProfilUser } }) => {
        if (loading) {
          return (
            <div className="app">
              <h1>loading......</h1>
            </div>
          );
        }
        if (getProfilUser) {
          return (

            <div>
              <h1>{getProfilUser.username}</h1>
              <h1>
                {getProfilUser.email}
              </h1>
            </div>
          );
        }
        return (
          <Link to="/login/user">Log in </Link>
        );
      }
      }
    </Query>
  </div>
);
export default ProfileUser;
