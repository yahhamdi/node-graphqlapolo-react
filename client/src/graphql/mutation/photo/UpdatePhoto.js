import gql from 'graphql-tag';

const UPDATE_PHOTO = gql`
  mutation updatePhoto($id: ID!, $input: PhotoInput) {
    updatePhoto(id: $id, input : $input) {
      photo{
        url
      }
    }
  }
`;
export default UPDATE_PHOTO;
