import React from 'react';
import PostPreview from '../src/components/PostPreview';
import '../src/styles/index.css';

export default {
  component: PostPreview,
  title: 'PostPreview',
};

export const toStorybook = () => (
  <PostPreview
    post={{
      slug: 'a-good-one',
      title: 'a good one',
      excerpt:
        'a long text about a blog post that i am goignt to writ with the best words available',
      image: { sharp: { fluid: 's' } },
    }}
  ></PostPreview>
);

toStorybook.story = {
  name: 'Post Preview default',
};
