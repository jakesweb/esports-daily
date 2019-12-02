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

class PostDetail extends Component {
  render() {
    return (
      <Query query={SINGLE_POST_QUERY} variables={{ postid: this.props.id }}>
        {({ data, error, loading }) => {
          const { post } = data;
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <>
              <p>{post.title}</p>
              <p>{post.createdAt}</p>
              <p>{post.description}</p>
              <p>{post.body}</p>
            </>
          );
        }}
      </Query>
    );
  }
}

export default PostDetail;
