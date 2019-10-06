import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  
  return (
    <Layout>
      Hello
      
      nice <Link to="/about/"> go to about &rarr;</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post}/>
      ))}
    </Layout>
  );
}
  
