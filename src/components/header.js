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

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
  border-bottom: 15px var(--color-primary) solid;
  transition: background-color 1s ease-in;
  height: 10vh;
`

const Header = () => (
  <MainHeader>
    <NavLink to="/" fontWeight="bold" hidden={ globalHistory.location.pathname === '/' }>
      A Pile of Bears
    </NavLink>
  

    <nav css={css` margin-top: 0; align-self: flex-end;`}>
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