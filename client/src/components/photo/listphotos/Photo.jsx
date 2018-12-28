/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import DELETE_PHOTO from '../../../graphql/mutation/photo/DeletePhoto';
import GET_ALL_PHOTO from '../../../graphql/query/photo/GetAllPhoto';

function Photo({ photo }) {
  return (
    <div className="grid-group gallery">
      <div className="grid-group-image">
        <img alt={photo.title} id="gal-img" src={photo.url} />
      </div>
      <div className="grid-group-meta">{photo.title}</div>
      <div className="left">
        <Link to={`/photo/${photo._id}`}>
          <img
            title="update photo"
            alt="update"
            src="/img/update.png"
          />
        </Link>
        {removePhoto(photo)}
      </div>
    </div>
  );
}

const removePhoto = (photo) => (
  <div className="right">
    <Mutation
      mutation={DELETE_PHOTO}
      refetchQueries={[{ query: GET_ALL_PHOTO }]}
    >
      {(deletePhoto) => (
        <button
          type="button"
          className="transparent"
          onClick={() => {
            deletePhoto({
              variables: {
                id: photo._id,
                url: photo.url,
              },
            });
          }}
        >
          <img src="/img/delete.png" alt="" />
        </button>
      )}
    </Mutation>
  </div>);
Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};
export default Photo;
