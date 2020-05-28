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
  },
  Launch: {
    // first arg is the parent object
    // common practice is to name the parent object to what its referring to, in this case launch
    siteDetail: (launch, __, { dataSources }) => {
      // console.log(parent.site_id);
      return dataSources.spacexApi.getSiteDetail({ siteId: launch.site_id });
    }
  }
};
