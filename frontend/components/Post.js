import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostStyles = styled.div`
  background: white;
  border: 1px solid black;
  box-shadow: 4px 2px 4px grey;
  width: 30%;
  p {
    padding-left: 5px;
    margin: 0 auto;
    text-align: center;
  }
`;

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const { post } = this.props;
    return (
      <Link href="/article/[id]" as={`/article/${post.id}`}>
        <a>
          <PostStyles>
            <p>{post.title}</p>
            <p>{post.description}</p>
          </PostStyles>
        </a>
      </Link>
    );
  }
}
