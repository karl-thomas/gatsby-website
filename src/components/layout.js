import React from 'react';
import { css } from '@emotion/core';
import Header from '../components/header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';
import '../styles/styles.css';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
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
      `}>
        {children}
      </main>
    </>
  )
}

export default Layout;