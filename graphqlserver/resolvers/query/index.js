export const Query = {

  photo: (_, { id }, { dataSources }) => dataSources.photoAPI.getPhotoById({ photoId: id }),
  listphoto: (_, $, { dataSources }) => dataSources.photoAPI.getAllPhotos(),
  user: (_, { id }, { dataSources }) => dataSources.userAPI.getUserById({ userId: id }),
  listuser: (_, $, { dataSources }) => dataSources.userAPI.getAllUsers(),
  getProfilUser: (_, $, { token, dataSources }) => dataSources.userAPI.getProfilUser(token),
};
