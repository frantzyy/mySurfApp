module.exports = {
  Query: {
    launches: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allLaunches = await dataSources.spacexApi.getAllLaunches();
      // we want these in reverse chronological order
      console.log("allLaunches: ", allLaunches);
      allLaunches.reverse();

      //TODO: paginateResults
      // const launches = paginateResults({
      //   after,
      //   pageSize,
      //   results: allLaunches
      // });

      return {
        // launches
        allLaunches
      };
    },
    launch: (_, { id }, { dataSources }) =>
      dataSources.spacexApi.getLaunchById({ launchId: id })
    // me: async (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
