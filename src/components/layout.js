import React from 'react';
import { css } from '@emotion/core';
import Header from './Header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Rock+Salt&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Livvic:300,400,500,600,700&display=swap"
          rel="stylesheet"
        ></link>
        <html lang="en"></html>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
