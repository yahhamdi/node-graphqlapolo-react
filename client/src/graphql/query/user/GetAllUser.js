import gql from 'graphql-tag';

const GET_ALL_USER = gql`
  query listuser {
    listuser {
      _id
      username
      email
    }
  }
`;
export default GET_ALL_USER;
