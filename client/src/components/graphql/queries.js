import gql from "graphql-tag";


export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    currUserId
  }
`
export const CURR_USER_ID = gql`
  query IsUserLoggedIn {
    currUserId @client
  }
`;

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
      user {
        _id
        username
      }
      poop
    }
  }
`
export const FETCH_USER = gql`
  query fetchUser($id: ID!) {
    user(_id: $id) {
      _id
      username
      routes {
        _id
        title
        description
        start
        end
      }
    }
  }
`

