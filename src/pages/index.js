import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

export default () => 
  <Layout>
    Hello Frontend Masters!
    nice <Link to="/about/"> go to about &rarr;</Link>
  </Layout>;
