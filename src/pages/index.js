import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  
  return (
    <Layout>
      Hello Frontend Masters!
      nice <Link to="/about/"> go to about &rarr;</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 4)}</pre>
      ))}
    </Layout>
  );
}
  
