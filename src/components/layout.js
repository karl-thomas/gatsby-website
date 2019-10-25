import React from 'react';
import { css } from '@emotion/core';
import Header from './Header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';
import '../styles/global.css';
import Hero from './Hero';
import { Router } from '@reach/router';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import Code from './Code';

// overwrite what components will render in the MDXRenderer
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children}</>,
};

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
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </>
  );
};

export default Layout;
