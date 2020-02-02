import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../graphql/mutations";
// import { FETCH_USER } from "../graphql/queries";
import { onError } from "apollo-link-error";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: []
        };
    }
    
    updateCache = (client, { data, error }) => {
      // console.log("updateCache-cache:", cache)
      // console.log("updateCache-data:", data)
        // here we can write directly to our cache with our returned mutation data
        // console.log("updatecache", {data})
        client.writeData({
            data: { isLoggedIn: data.login.loggedIn },
            // errors: error.graphQLErrors
        });
        // console.log("updateCache-data:", data)
        // const { token } = data.login;
        // localStorage.setItem("auth-token", token)
        // debugger
    }

    update = (field) => { 
        return e => this.setState({ [field]: e.target.value });
    }
   
    render() {
        return (
          <Mutation
            mutation={LOGIN_USER}
            onError={({ graphQLErrors }) => {
              // debugger
              if (graphQLErrors) graphQLErrors.map(({ message }) => this.setState({errors: [message]}))
            }}
            update={(client, data) => this.updateCache(client, data)}
        
            onCompleted={(data) => {
              // debugger
              const { token } = data.login;
              localStorage.setItem("auth-token", token);
              console.log("Mutation data:", data);
              this.props.history.push("/");
              window.location.reload();
            }} 
            // refetchQueries={() => {
            //   console.log("refetchQueries:", this.props.currUserId)
            //   return [{
            //     query: FETCH_USER,
            //     variables: {id: this.props}
            //   }]
            // }}
          >
            {(loginUser)=> (
              <div>
                <div id="sessionBackgroundColor">
                  <div id="sessionLoginFormWrapper">
                    <form
                      id="sessionLoginForm"
                      onSubmit={e => {
                        e.preventDefault();
                        loginUser({
                          variables: {
                            email: this.state.email,
                            password: this.state.password
                          }
                        });
                      }}
                    >
                      <div id="sessionLoginFormHeader">
                        <h3>Log In</h3>
                      </div>
                      <input
                        value={this.state.email}
                        onChange={this.update("email")}
                        placeholder="Email"
                      />
                      <input
                        value={this.state.password}
                        onChange={this.update("password")}
                        type="password"
                        placeholder="Password"
                      />
                      <button type="submit">Log In</button>
                     
                      <div className="session-errors">
                       
                        {this.state.errors.length > 0 ? "ohPüp! " + this.state.errors[0] : ""}

                      </div>
                    </form>
                  </div>
                  <div id="sessionBackgroundImage"></div>
                </div>
              </div>
            )}
          </Mutation>
        );
    }
}
export default Login;
