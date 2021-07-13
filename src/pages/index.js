/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RecentWriting from '../components/RecentWriting';
import RecentWork from '../components/RecentWork';

const ButtonLink = (props) => (
  <Link to={props.to}>
    <button
      type="button"
      className="cta bg-heading-text dark:bg-dark-heading-text text-white py-2 px-4 mt-2 text-sm font-worksans uppercase"
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

          <p className="text-text text-xl md:text-2xl mt-5 dark:text-dark-text">
            I'm a human-centered user experience designer based in Southern
            California. I currently work at Esri as a UX strategist.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="ml-1 md:ml-24 md:mt-4 md:pr-8">
          <h3 className="mt-12 md:mt-8">Recent writing</h3>
          <RecentWriting />
          <ButtonLink to="/writing/">Read more writing</ButtonLink>
        </div>
        <div className="ml-1 md:ml-24 mt-4 md:pr-8">
          <h3 className="mt-12 md:mt-8">Recent work</h3>
          <RecentWork className="w-max" />
          <ButtonLink to="/work/">Explore more work</ButtonLink>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
