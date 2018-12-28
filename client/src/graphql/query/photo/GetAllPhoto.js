import gql from 'graphql-tag';

const GET_ALL_PHOTO = gql`
  query listphoto {
    listphoto {
      _id
      url
      title
    }
  }
`;
export default GET_ALL_PHOTO;
