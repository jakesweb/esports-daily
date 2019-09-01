import React, { Component } from "react";
import Link from "next/link";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
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

const LinkStyle = styled.div`
  width: 100%;
  text-align: center;
  a {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
          {(signup, { error, loading }) => (
            <StyledForm
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                this.setState({ name: "", email: "", password: "" });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign up for an account</h2>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                </label>
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
                <button type="submit">Sign Up!</button>
              </fieldset>
            </StyledForm>
          )}
        </Mutation>
        <LinkStyle>
          <Link href="/signin">
            <a>If you have an account, then you can sign in by clicking here</a>
          </Link>
        </LinkStyle>
      </>
    );
  }
}
