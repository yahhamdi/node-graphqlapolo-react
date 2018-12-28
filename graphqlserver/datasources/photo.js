/* eslint-disable no-underscore-dangle */
import { RESTDataSource } from 'apollo-datasource-rest';

class PhotoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:5000/api';
  }

  photoReducer(photo) {
    return {
      _id: photo._id,
      url: photo.url,
      title: photo.title,

    };
  }

  async getAllPhotos() {
    const res = await this.get('photo');

    return res.photo;
  }

  async getPhotoById({ photoId }) {
    const res = await this.get(`photo/${photoId}`);
    return this.photoReducer(res.photo);
  }

  async CreatePhoto({ input: { url, title } } = {}) {
    return this.post(
      'photo',
      { input: { url, title } },
    );
  }

  async updatePhoto({ id, input: { url, title } } = {}) {
    return this.put(
      `photo/${id}`,
      { input: { id, url, title } },
    );
  }

  async deletePhoto({ id: idArg }) {
    const photoId = this.context && this.context.photo ? this.context.photo.id : idArg;
    return this.delete(
      `photo/${photoId}`,
    );
  }
}

export default PhotoAPI;
