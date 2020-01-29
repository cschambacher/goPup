import gql from "graphql-tag";


export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    currUserId 
  }
`

export const FETCH_ROUTES = gql`
  query FetchRoutes {
    routes {
      _id
      title
      description
      start
      end
    }
  }
`
export const FETCH_ROUTE = gql`
  query fetchRoute($id: ID!) {
    route(_id: $id) {
      _id
      title
      description
      start
      end
    }
  }
`

