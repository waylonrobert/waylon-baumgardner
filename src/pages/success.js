import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';
import TedLassoDance from '../images/ted-lasso-dance.gif';

export default function Success() {
  return (
    <Layout>
      <SEO title="Message success" />
      <div className="m-12 mx-auto w-11/12 md:w-3/4 lg:w-3/5">
        <TitleBlock pageTitle="Thanks for your message!" />

        <div className="mx-auto w-11/12 md:w-3/4 lg:w-3/5 my-8">
          <p>
            Thanks for sending me a message — it's on the way to me and I'll get
            to it soon! I appreciate you.
          </p>
          <figure className="mx-auto mt-4 w-full md:w-3/4 lg:w-3/5 text-center">
            <img
              className="mx-auto"
              src={TedLassoDance}
              alt="Jason Sudeikis as Ted Lasso dancing in locker room from Apple TV+'s Ted Lasso TV series"
            />
          </figure>
        </div>
      </div>
    </Layout>
  );
}
