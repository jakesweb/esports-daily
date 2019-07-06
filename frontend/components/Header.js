import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

class Header extends Component {
  render() {
    return (
      <Heading>
        <div>
          <h1>Esports Daily</h1>
          <p>Your daily source for esports news</p>
        </div>
        <nav>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
          <Link href="/account">
            <a>Account</a>
          </Link>
        </nav>
      </Heading>
    );
  }
}

export default Header;
