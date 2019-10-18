import React from 'react';
import Layout from '../components/Layout';
import Insta from '../components/Insta';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';
import Hero from '../components/Hero';

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
