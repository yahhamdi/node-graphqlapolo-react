import React from 'react';
import { Mutation } from 'react-apollo';
import ADD_PHOTO from '../../../graphql/mutation/photo/AddPhoto';
import FormPhoto from './FormPhoto';

const AddPhoto = () => (
  <div className="app">
    <header>
      <h2 className="section-title">New Photo</h2>
    </header>
    <table cellPadding="0" cellSpacing="0" border="0">
      <div>
        <Mutation mutation={ADD_PHOTO}>
          {(createPhoto) => <FormPhoto onSubmit={createPhoto} />}
        </Mutation>
      </div>
    </table>
  </div>
);
export default AddPhoto;
