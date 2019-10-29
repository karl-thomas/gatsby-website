import React from 'react';
import Insta from '../components/Insta';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';
import FadeWrapper from '../components/FadeWrapper';

export default () => {
  const posts = usePosts();

  return (
    <FadeWrapper>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <Insta></Insta>
    </FadeWrapper>
  );
};
