import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ReadLink from '../components/ReadLink';
import FadeWrapper from '../components/FadeWrapper';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <FadeWrapper>
    <article className="stack">
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          Posted by {post.frontmatter.author}
        </p>
      </header>

      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
    <ReadLink to="/"> &larr; back to all posts</ReadLink>
  </FadeWrapper>
);

export default PostTemplate;
