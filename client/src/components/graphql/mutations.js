import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
    }
  }
`
export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!){
    verifyUser(token: $token){
      loggedIn
    }
  }
`
export const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $email: String!, $password: String!, $accountType: String!) {
    register( username: $username, email: $email, password: $password, accountType: $accountType) {
      email
      password
      token
      loggedIn
    }
  }
`
export const NEW_ROUTE = gql`
  mutation NewRoute($title: String!, $description: String!, $start:String!, $end: String!) {
    newRoute(title: $title, description: $description, start: $start, end: $end) {
      _id
      title
      description
      start
      end
    }
  }
`
export const DELETE_ROUTE = gql`
  mutation DeleteRoute($id: ID!) {
    deleteRoute(_id: $id) {
      _id
    }
  }
`
;

