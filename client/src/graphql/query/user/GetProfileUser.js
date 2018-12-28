import gql from 'graphql-tag';

const GET_PROFILE_USER = gql`
  query getProfilUser($token: String) {
    getProfilUser(token: $token) {
      _id
      username
      email
    }
  }
`;
export default GET_PROFILE_USER;
