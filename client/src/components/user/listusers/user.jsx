/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GET_ALL_USER from '../../../graphql/query/user/GetAllUser';
import DELETE_USER from '../../../graphql/mutation/user/DeleteUser';

const User = ({ user }) => (
  <table border="0">
    <tbody>
      <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`/users/${user._id}`}>
            <img
              title="update user"
              alt="update"
              src="/img/update.png"
            />
          </Link>
        </td>
        <td>
          <Mutation
            mutation={DELETE_USER}
            refetchQueries={[{ query: GET_ALL_USER }]}
          >
            {(deleteUser) => (
              <button
                className="transparent"
                type="button"
                onClick={() => {
                  deleteUser({
                    variables: {
                      id: user._id,
                      email: user.email,
                    },
                  });
                }}
              >
                <img src="/img/delete.png" alt="" />
              </button>
            )}
          </Mutation>
        </td>
      </tr>
    </tbody>
  </table>

);
User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
