import React from 'react';
import { Query } from 'react-apollo';
import { map } from 'lodash';
import Photo from './Photo';
import GET_ALL_PHOTO from '../../../graphql/query/photo/GetAllPhoto';

const ListPHOTOS = () => (
  <Query query={GET_ALL_PHOTO}>
    {({ error, data, loading }) => {
      if (loading) {
        return (
          <div className="app">
            <h1>loading......</h1>
          </div>
        );
      }
      if (error) {
        return error;
      }
      const { listphoto } = data;
      const photos = map(listphoto, (photo) => (
        <Photo photo={photo} />
      ));
      return (
        <div className="app">
          <header>
            <h2 className="section-title">list of photos</h2>
          </header>
          <section className="grid">{photos}</section>
        </div>
      );
    }}
  </Query>
);
export default ListPHOTOS;
