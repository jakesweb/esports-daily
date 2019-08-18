import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

const Heading = styled.div`
  .container-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: yellow;
  }
  .logo-div {
    margin-left: 5%;
  }
  h1 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    margin-top: 5%;
    margin-right: 5%;
  }
  nav a {
    text-align: center;
    margin: 10px;
    font-size: 1.2em;
  }
  nav a:hover {
    color: red;
  }
`;

class Header extends Component {
  render() {
    return (
      <Heading>
        <div className="container-div">
          <div className="logo-div">
            <h1>
              <a href="/">Esports Daily</a>
            </h1>
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
        </div>
      </Heading>
    );
  }
}

export default Header;
