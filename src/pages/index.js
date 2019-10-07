import React from 'react';
import Layout from '../components/layout';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero></Hero>
      <Layout>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta></Insta>
      </Layout>
    </>
  );
};
