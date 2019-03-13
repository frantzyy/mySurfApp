# MySurfApp

Primary goal is to learn React and GraphQL.

Objective is to build a surf app that looks up surf spots and aggregates data from multiple resources, but starting out with SpaceX apis because that's pretty cool too.

What I've done so far:

- used create-react app to start the client
- followed Apollo tutorials to add a SpaceX api fronted by GraphQL
- added Material UI React components to start learning those

## Getting Started

### Client

`cd ./ui`
`yarn install`
`npm run start`

- launch browser to: http://localhost:8080

- webpack-dev server will watch your client side code for changes.

### Server

`cd ./api`
`yarn install`
`npm run start`

- Express w/Apollo GraphQL api will load on http://localhost:4000

- GraphiQL editor will load on http://localhost:4000/graphql

- Sample query to cut/paste into GraphqiQL editor:

```
query GetLaunches {
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
```
