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

    // this.updateSelection = this.updateSelection.bind(this);
  }

  updateCache = (client, { data }) => {
    console.log(data);
    // here we can write directly to our cache with our returned mutation data
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  };

  update = field => {
    return e => this.setState({ [field]: e.target.value });
  };

  // updateSelection(e) {
  //   e.preventDefault();
  //   this.setState({ accountType: e.taget.value });
  // }

  render() {
    console.log(this.state)
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
            <form
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
                <option value="owner">Owner</option>
                <option value="walker">Walker</option>
              </select>
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default Register;
