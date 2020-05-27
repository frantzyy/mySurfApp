module.exports = {
  Query: {
    launches: async (_, __, { dataSources }) => {
      const allLaunches = await dataSources.spacexApi.getAllLaunches();
      console.log("allLaunches: ", allLaunches);
      allLaunches.reverse();

      return allLaunches;
    },

    launch: (_, { id }, { dataSources }) =>
      dataSources.spacexApi.getLaunchById({ launchId: id }),
    // me: async (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()

    nextLaunch: (_, __, { dataSources }) =>
      dataSources.spacexApi.getNextLaunch()
  }
};
