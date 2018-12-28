import gql from 'graphql-tag';

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UserInput) {
    updateUser(id: $id, input : $input) {
      user{
        username,
        email
      }
    }
  }
`;
export default UPDATE_USER;
