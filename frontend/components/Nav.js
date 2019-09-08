import Link from "next/link";
import styled from "styled-components";
import User from "./User";

const NavStyle = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  margin-top: 5%;
  margin-right: 5%;
  nav a {
    text-align: center;
    margin: 10px;
    font-size: 1.2em;
  }
  nav a:hover {
    color: red;
  }
`;

const Nav = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null;
      return (
        <NavStyle>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
          <Link href="/account">
            <a>Account</a>
          </Link>
          {me && (
            <>
              <Link href="/submit">
                <a>Submit</a>
              </Link>
              <Link href="/signout">
                <a>Signout</a>
              </Link>
            </>
          )}
        </NavStyle>
      );
    }}
  </User>
);

export default Nav;
