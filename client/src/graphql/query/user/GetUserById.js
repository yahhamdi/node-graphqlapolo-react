import gql from 'graphql-tag';

const GET_USER_BY_ID = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      password
    }
  }
`;
export default GET_USER_BY_ID;
