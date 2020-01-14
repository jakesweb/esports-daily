import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($postid: ID!) {
    post(where: { id: $postid }) {
      id
      title
      description
      body
      createdAt
    }
  }
`;

const StyledDiv = styled.div`
  overflow: hidden;
  background-color: yellow;
  padding-bottom: 10%;
  .meta {
    text-align: center;
    margin: 5%;
    line-height: 20%;
    .title {
      font-size: 1.4em;
      font-weight: 600;
    }
  }
  .markdown {
    margin: 0 8%;
    background-color: lightgrey;
    padding: 5%;
  }
`;

class PostDetail extends Component {
  render() {
    return (
      <Query query={SINGLE_POST_QUERY} variables={{ postid: this.props.id }}>
        {({ data, error, loading }) => {
          const { post } = data;
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <StyledDiv>
              <div class="meta">
                <p class="title">{post.title}</p>
                <p>{post.description}</p>
                <p>
                  Submitted{" "}
                  {new Date(post.createdAt).toLocaleDateString("en-US")}
                </p>
              </div>
              <div class="markdown">
                <ReactMarkdown>{post.body}</ReactMarkdown>
              </div>
            </StyledDiv>
          );
        }}
      </Query>
    );
  }
}

export default PostDetail;
