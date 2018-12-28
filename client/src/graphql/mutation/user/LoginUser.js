import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation loginUser($input: LoginInput) {
    loginUser(input : $input) {
      user{
        username,
        email,
        password,
      },
      token
    }
  }
`;
export default LOGIN_USER;
