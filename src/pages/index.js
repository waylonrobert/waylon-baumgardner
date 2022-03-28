/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RecentWriting from '../components/RecentWriting';
import RecentWork from '../components/RecentWork';

const ButtonLink = (props) => (
  <Link to={props.to}>
    <button
      type="button"
      className="cta bg-darkPurple dark:bg-dark-heading-text text-white dark:text-black py-2 px-4 mt-6 text-sm font-worksans uppercase"
    >
      {props.children}
    </button>
  </Link>
);
const IndexPage = () => (
  <Layout>
    <SEO title="Welcome to Waylon Baumgardner's website" />
    <div className="mx-auto my-12 w-11/12 md:w-3/4 2xl:w-1/2">
      <div>
        <div className="md:col-span-2 ml-1 md:ml-24 md:mt-8 md:pr-8">
          <h2 className="dark:text-dark-heading-text">Hi, I'm Waylon</h2>

          <p className="text-darkNavy text-xl md:text-2xl mt-5 dark:text-dark-text">
            I'm a user experience professional, design leader, and educator based in Southern California.
          </p>
          <p className="text-darkNavy text-md md:text-lg mt-2 dark:text-dark-text w-3/4">I've designed and coded countless websites professionally since 2009. I'm passionate about mentoring and building teams surrounding human-centered design.</p>
        </div>
      </div>
      <div className="md:grid md:gap-4">
      <div className="ml-1 md:ml-24 mt-4 md:pr-8">
          <h3 className="mt-12 md:mt-8">Selected work experience</h3>
          <RecentWork className="w-max" />
          <ButtonLink to="/work/">Explore more work</ButtonLink>
        </div>
        <div className="ml-1 md:ml-24 md:mt-4 md:pr-8">
          <h3 className="mt-12 md:mt-8">Recent writing</h3>
          <RecentWriting />
          <ButtonLink to="/writing/">Read more writing</ButtonLink>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
