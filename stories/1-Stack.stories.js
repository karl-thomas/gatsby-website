import React from 'react';
import '../src/styles/index.css';
import Stack from '../src/components/Stack';
import css from '@emotion/css';

export default {
  component: Stack,
  title: 'Stack',
};

export const StackDefault = () => (
  <Stack>
    <h1>Hey</h1>
    <section>
      <h2>A section</h2>
      <p>The details</p>
    </section>
    <section>
      <h2>A section</h2>
      <p>The details</p>
    </section>
  </Stack>
);

export const StackRecursive = () => (
  <Stack recursive>
    <h1>Hey</h1>
    <section>
      <h2>A section</h2>
      <p>The details</p>
    </section>
    <section>
      <h2>A section</h2>
      <p>The details</p>
    </section>
  </Stack>
);

export const StackSplitAfter = () => (
  <Stack
    splitAfter={1}
    css={css`
      height: 100vh;
    `}
  >
    <h1>Hey</h1>
    <section className="margin-top:1">
      <h2>A section</h2>
      <p>The details</p>
    </section>
    <section>
      <h2>A section</h2>
      <p>The details</p>
    </section>
  </Stack>
);
