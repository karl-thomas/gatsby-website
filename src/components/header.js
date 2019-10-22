import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { Router } from '@reach/router';
import { globalHistory } from "@reach/router"

const NavLink = styled(Link)`
  color: var(--color-dark);
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin-top: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 1px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const HeaderInfo = styled.section`
  order: 1;
  transition: transform 0.4s ease-in;

  p {
    display: none;
  }

  h1 {
    display: inherit;
    text-shadow: 1px 1px 3px #eeddff66;
  }

  &.hero {
    transform: translateY(-20vh);

    h1 {
      font-size: 2rem;
    }

    p {
      display: block;
      color: #222;
    }
  }
`;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
  border-bottom: 15px var(--color-primary) solid;
  transition: background-color 1s ease-in;
  height: 10vh;
`

const Header = () => (
  <MainHeader>
    <HeaderInfo className={ globalHistory.location.pathname === '/' ? 'hero' : ''}>
      <NavLink css={css`order: 1;`} to="/" fontWeight="bold">
        <h1>A Pile of Bears &hearts;</h1>
        <p>
          hello worl <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </NavLink>
    </HeaderInfo>
  

    <nav css={css` margin-top: 0; order: 0; align-self: flex-end;`}>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        about
      </NavLink>
    </nav>
  </MainHeader>
)

export default Header;