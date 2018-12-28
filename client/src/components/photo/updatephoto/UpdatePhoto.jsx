import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import FormPhoto from '../addphoto/FormPhoto';
import UPDATE_PHOTO from '../../../graphql/mutation/photo/UpdatePhoto';

const UpdatePhoto = ({ photo }) => (
  <Mutation mutation={UPDATE_PHOTO}>
    {(updatePhoto) => <FormPhoto photo={photo} onSubmit={updatePhoto} />}
  </Mutation>
);
UpdatePhoto.propTypes = {
  photo: PropTypes.object.isRequired,
};
export default UpdatePhoto;
