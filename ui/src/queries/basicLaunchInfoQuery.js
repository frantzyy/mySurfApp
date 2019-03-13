import gql from "graphql-tag";

const basic = {
  query: gql`
    {
      launch(id: 5) {
        id
        site
        mission {
          name
        }
        rocket {
          id
          name
        }
      }
    }
  `
};

export default basic;
