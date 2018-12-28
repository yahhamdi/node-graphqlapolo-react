import gql from 'graphql-tag';

const ADD_PHOTO = gql`
  mutation createPhoto($input: PhotoInput) {
    createPhoto(input : $input) {
      photo{
        url,
        title
      }
    }
  }
`;
export default ADD_PHOTO;
