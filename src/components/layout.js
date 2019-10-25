import React from 'react';
import { css } from '@emotion/core';
import Header from './Header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';
import '../styles/global.css';
import Hero from './Hero';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import { Router } from '@reach/router';

const timeout = 300;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-out`,
    opacity: 0,
  },
};

const Transition = ({ location, children }) => (
  <TransitionGroup>
    <ReactTransition
      key={location.pathname}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {status => (
        <div
          style={{
            ...getTransitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
);

const Layout = ({ children, location }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister&display=swap"
          rel="stylesheet"
        ></link>
        <html lang="en"></html>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Router>
        <Hero path="/"></Hero>
      </Router>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        <Transition location={location}>{children}</Transition>
      </main>
    </>
  );
};

export default Layout;
