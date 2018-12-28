import React from 'react';
import { Query } from 'react-apollo';
import _ from 'lodash';
import GET_ALL_USER from '../../../graphql/query/user/GetAllUser';
import User from './user';

const ListUser = () => (
  <Query query={GET_ALL_USER}>

    {({ loading, data, error }) => {
      if (loading) {
        return (
          <div className="app">
            <h1>loading......</h1>
          </div>
        );
      }
      if (error) return error;
      const { listuser } = data;
      const users = _.map(listuser, (user) => (
        <User user={user} />
      ));
      return (
        <div className="app">
          <header>
            <h2 className="section-title">list of users</h2>
          </header>
          <div className="tbl-header">
            <div className="tbl-content">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>delete</th>
                  </tr>
                </thead>

              </table>
              {users}
            </div>
          </div>
        </div>

      );
    }}
  </Query>

);
export default ListUser;
