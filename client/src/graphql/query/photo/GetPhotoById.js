import gql from 'graphql-tag';

const GET_PHOTO_BY_ID = gql`
  query photo($id: ID!) {
    photo(id: $id) {
      _id
      url
      title
    }
  }
`;
export default GET_PHOTO_BY_ID;
