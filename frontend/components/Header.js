import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

import Nav from "./Nav";

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
          <Nav />
        </div>
      </Heading>
    );
  }
}

export default Header;
