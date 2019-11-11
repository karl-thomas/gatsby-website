import React from 'react';
import { css } from '@emotion/core';
import ReadLink from './ReadLink';
import Image from 'gatsby-image';
import FadeLink from './FadeLink';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type() {
        margin-top: 1rem;
      }
    `}
  >
    <FadeLink
      to={`/posts/${post.slug}`}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title} // this is bad dont do this
      />
    </FadeLink>
    <div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <ReadLink to={`/posts/${post.slug}`}>read this post &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview;
