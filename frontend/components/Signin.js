import React, { Component } from "react";
import Router from "next/router";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import gql from "graphql-tag";

import { CURRENT_USER_QUERY } from "./User";
import DisplayError from "./DisplayError";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

const StyledForm = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  font-size: 1.5rem;
  font-weight: 600;
  padding: 20px;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: red;
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: yellow;
    color: black;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signin, { error, loading }) => (
            <StyledForm
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                this.setState({ email: "", password: "" });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <DisplayError error={error} />
                <h2>Sign In</h2>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Sign In!</button>
              </fieldset>
            </StyledForm>
          )}
        </Mutation>
      </>
    );
  }
}

export default Signin;
export { SIGNIN_MUTATION };
