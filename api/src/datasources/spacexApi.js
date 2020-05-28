const { RESTDataSource } = require("apollo-datasource-rest");

class SpacexApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacexdata.com/v3/";
  }

  // leaving this inside the class to make the class easier to test
  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      site_id: launch.launch_site.site_id,
      details: launch.details,
      when: launch.launch_date_local,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type
      }
    };
  }

  async getAllLaunches() {
    const res = await this.get("launches");

    // transform the raw launches to a more friendly
    return res && res.length ? res.map(l => this.launchReducer(l)) : [];
  }

  async getLaunchById({ launchId }) {
    const res = await this.get("launches", { flight_number: launchId });
    return this.launchReducer(res[0]);
  }

  async getLaunchesByIds({ launchIds }) {
    return Promise.all(
      launchIds.map(launchId => this.getLaunchById({ launchId }))
    );
  }

  async getNextLaunch() {
    const res = await this.get("launches/next");
    return this.launchReducer(res);
  }

  async getSiteDetail({ siteId }) {
    let res = await this.get(`launchpads/${siteId}`);
    // const res = await this.get("launchpads/ccafs_slc_40");
    // console.log(res);
    return {
      id: res.id,
      site_id: res.site_id,
      name: res.site_name_long,
      details: res.details
    };
  }
}

module.exports = SpacexApi;
