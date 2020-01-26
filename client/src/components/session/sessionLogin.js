import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../graphql/mutations";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    updateCache = (client, { data }) => {
<<<<<<< HEAD
        // console.log(data);
=======
>>>>>>> d6ec1cef24973874a4f99b075e1533394ecbee88
        // here we can write directly to our cache with our returned mutation data
        client.writeData({
            data: { isLoggedIn: data.login.loggedIn }
        });
    }

    update = (field) => {
        return e => this.setState({ [field]: e.target.value });
    }
    render() {
        return (
          <Mutation
            mutation={LOGIN_USER}
            update={(client, data) => this.updateCache(client, data)}
            onCompleted={data => {
              const { token } = data.login;
              localStorage.setItem("auth-token", token);
              this.props.history.push("/");
            }}
          >
            {loginUser => (
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
