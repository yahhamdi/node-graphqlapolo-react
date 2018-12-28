import gql from 'graphql-tag';

const DELETE_PHOTO = gql`
  mutation deletePhoto($id: ID!) {
    deletePhoto(id: $id) {
      photo{
        url
      }
    }
  }
`;
export default DELETE_PHOTO;
