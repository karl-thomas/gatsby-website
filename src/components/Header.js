import React from 'react';
import styled from '@emotion/styled';
import FadeLink from './FadeLink';

const NavLink = styled(FadeLink)`
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

const SiteTitle = styled(FadeLink)`
  font-size: var(--h5);
  font-family: 'Rock Salt', cursive;
  display: inherit;
  color: #222;
  text-decoration: none;
  margin-bottom: 0.5rem;
  text-decoration: none;
`;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.5rem 1rem;
  border-bottom: 15px var(--color-primary) solid;
  transition: background-color 1s ease-in;
  height: 10vh;
`;

const Header = () => (
  <MainHeader>
    <SiteTitle to="/">A Pile of Bears</SiteTitle>

    <nav>
      <NavLink direction="left" to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink direction="left" to="/about/" activeClassName="current-page">
        about
      </NavLink>
    </nav>
  </MainHeader>
);

export default Header;
