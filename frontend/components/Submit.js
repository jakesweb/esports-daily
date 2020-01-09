import { Component } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ARTICLE_MUTATION = gql`
  mutation ARTICLE_MUTATION(
    $title: String!
    $description: String
    $tags: [String]
    $body: String!
  ) {
    createPost(
      title: $title
      description: $description
      tags: $tags
      body: $body
    ) {
      id
      title
      description
      tags
      createdAt
    }
  }
`;

const FormStyle = styled.form`
  label {
    font-size: 1.2em;
    font-weight: 600;
    font-style: italic;
    color: #010101;
    display: block;
  }
  textarea {
    display: block;
  }
  textarea,
  input {
    margin: 0 auto;
  }
  input[type="text"],
  textarea {
    width: 50em;
  }
  input[type="text"],
  textarea {
    border: 5px yellow solid;
    border-radius: 10px;
  }
  button {
    font-size: 1.5em;
    font-weight: 600;
    font-style: italic;
    background: yellow;
    border: 2px black solid;
    border-radius: 10px;
    margin-top: 0.8em;
  }
`;

const BodyDiv = styled.div`
  text-align: center;
`;

class Submit extends Component {
  state = {
    title: "",
    description: "",
    tags: "",
    body: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={ARTICLE_MUTATION} variables={this.state}>
        {(createPost, { loading, error }) => (
          <BodyDiv>
            <h1>Submit an article</h1>
            <FormStyle
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await createPost();
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.saveToState}
                />
                <label htmlFor="description">DESCRIPTION</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.saveToState}
                />
                <label htmlFor="tags">TAGS</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={this.state.tags}
                  onChange={this.saveToState}
                />
                <label htmlFor="body">BODY (MARKDOWN SUPPORTED)</label>
                <textarea
                  rows="30"
                  cols="50"
                  id="body"
                  name="body"
                  title="body"
                  value={this.state.body}
                  onChange={this.saveToState}
                />
                <button type="submit" id="submit">
                  Submit
                </button>
              </fieldset>
            </FormStyle>
          </BodyDiv>
        )}
      </Mutation>
    );
  }
}

export default Submit;
