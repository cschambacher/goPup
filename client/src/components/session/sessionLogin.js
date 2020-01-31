import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../graphql/mutations";
// import { onError } from "apollo-link-error";

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
        
        // here we can write directly to our cache with our returned mutation data
        client.writeData({
            data: { isLoggedIn: data.login.loggedIn },
            // errors: error.graphQLErrors
        });
      console.log("updatecache", client.error)
    }

    update = (field) => {
        return e => this.setState({ [field]: e.target.value });
    }
    displayErrors(){
      if (this.state.errors.length != 0) {
        return <span >{this.state.errors[0]}</span>
      } 
    }
    render() {
        return (
          <Mutation
            mutation={LOGIN_USER}
            onError={({ graphQLErrors }) => {
              if (graphQLErrors) graphQLErrors.map(({ message }) => this.setState({errors: [message]}))
            }}
            update={(client, data) => this.updateCache(client, data)}
            onCompleted={({data, error}) => {
              const { token } = data.login;
              localStorage.setItem("auth-token", token);
              this.props.history.push("/");
            }}

          >
            {(loginUser)=> (
              // if (!error) return null;
              console.log("login state", this.state.errors),
              // console.log("login error", graphQLErrors),
              
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
