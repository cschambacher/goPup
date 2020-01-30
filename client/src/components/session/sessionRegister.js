import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { REGISTER_USER } from "../graphql/mutations";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      accountType: "owner"
    };

  }

  updateCache = (client, { data }) => {
    // here we can write directly to our cache with our returned mutation data
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  };

  update = field => {
    return e => this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        update={(client, data) => this.updateCache(client, data)}
        onCompleted={data => {
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
      >
        {registerUser => (
          <div>
            <div id="sessionBackgroundColor">
              <div id="sessionLoginFormWrapper">
                <form
                  id="sessionLoginForm"
                  onSubmit={e => {
                    e.preventDefault();
                    registerUser({
                      variables: {
                        email: this.state.email,
                        username: this.state.username,
                        password: this.state.password,
                        accountType: this.state.accountType
                      }
                    });
                  }}
                >
                  <div id="sessionLoginFormHeader">
                    <h3>Register</h3>
                  </div>
                  <input
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                  <input
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Name"
                  />
                  <input
                    value={this.state.password}
                    onChange={this.update("password")}
                    type="password"
                    placeholder="Password"
                  />
                  <select onChange={this.update("accountType")}>
                    <option value="owner">I am a dog owner</option>
                    <option value="walker">I am a dog walker</option>
                  </select>
                  <button type="submit">Register</button>
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
export default Register;
