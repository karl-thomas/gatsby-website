import React from 'react';
import Link from '../components/FadeLink';
import FadeWrapper from '../components/FadeWrapper';

export default () => (
  <FadeWrapper>
    <h1>About</h1>
    <Link to="/"> &larr; back to home</Link>
  </FadeWrapper>
);
