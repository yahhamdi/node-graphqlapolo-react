import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import UpdatePhoto from '../updatephoto';
import GET_PHOTO_BY_ID from '../../../graphql/query/photo/GetPhotoById';

const PhotoDetail = ({ match }) => (
  <div className="app">
    <header>
      <h2 className="section-title">Edit Photo</h2>
    </header>
    <Query
      query={GET_PHOTO_BY_ID}
      variables={{
        id: match.params.id,
      }}
    >
      {({ data, loading }) => {
        if (loading) {
          return 'Loading...';
        }
        const { photo } = data;
        return (

          <div>
            <img alt={photo.title} src={photo.url} className="img" />
            <UpdatePhoto photo={photo} />
          </div>
        );
      }}
    </Query>
  </div>
);
PhotoDetail.propTypes = {
  match: PropTypes.object.isRequired,
};
export default PhotoDetail;
