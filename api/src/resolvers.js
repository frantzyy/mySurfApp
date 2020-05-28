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

    nextLaunch: (_, __, { dataSources }) =>
      dataSources.spacexApi.getNextLaunch(),

    siteDetail: (_, { siteId }, { dataSources }) =>
      dataSources.spacexApi.getSiteDetail({ siteId: siteId })
  }
};
