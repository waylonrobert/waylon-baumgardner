import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div>
      Can't find the page you're looking for -{' '}
      <Link to="/contact/">contact me</Link> and let me know!
    </div>
  </Layout>
);

export default NotFoundPage;
