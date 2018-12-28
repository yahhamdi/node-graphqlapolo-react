export const Mutation = {
  createUser: async (_, { input }, { dataSources }) => {
    const user = await dataSources.userAPI.CreateUser({ input });
    if (user) {
      return { user };
    }
    return null;
  },
  loginUser: async (_, { input }, { dataSources }) => {
    const { token, user } = await dataSources.userAPI.LoginUser({ input });
    if (user) {
      return {
        user,
        token,
      };
    }

    throw new Error('no allowed');
  },
  updateUser: async (_, { input, id }, { dataSources }) => {
    const user = await dataSources.userAPI.updateUser({ input, id });
    if (user) {
      return { user };
    }
    return null;
  },
  deleteUser: async (_, { id }, { dataSources }) => {
    const user = await dataSources.userAPI.deleteUser({ id });
    if (user) {
      return { user };
    }
    return null;
  },
  createPhoto: async (_, { input }, { dataSources }) => {
    const photo = await dataSources.photoAPI.CreatePhoto({ input });
    if (photo) {
      return { photo };
    }
    return null;
  },
  updatePhoto: async (_, { input, id }, { dataSources }) => {
    const photo = await dataSources.photoAPI.updatePhoto({ input, id });
    if (photo) {
      return { photo };
    }
    return null;
  },
  deletePhoto: async (_, { id }, { dataSources }) => {
    const photo = await dataSources.photoAPI.deletePhoto({ id });
    if (photo) {
      return { photo };
    }
    return null;
  },
};
