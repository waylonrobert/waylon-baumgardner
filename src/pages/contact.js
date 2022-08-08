import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact me" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <TitleBlock
        pageTitle="Contact me"
        shortDescription="Interested in connecting with me about a new project or something else?
        Contact me via the form below."
      />
      <div className="mx-auto w-11/12 md:w-3/4 my-4 md:my-8">
        <form
          name="contact"
          method="POST"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* honeypot */}
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="block mb-4" htmlFor="name">
            <span className="text-text dark:text-dark-text">Name</span>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full rounded-md focus:ring-accent dark:focus:ring-dark-heading-text"
              placeholder="Your name"
              name="name"
            />
          </label>
          <label className="block mb-4" htmlFor="email">
            <span className="text-text dark:text-dark-text">Email</span>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full rounded-md focus:ring-accent dark:focus:ring-dark-heading-text"
              placeholder="youremail@youremailprovider.com"
              name="email"
            />
          </label>

          <label className="block mb-4" htmlFor="message">
            <span className="text-text dark:text-dark-text">Message</span>
            <textarea
              id="message"
              className="mt-1 block w-full rounded-md focus:ring-accent dark:focus:ring-dark-heading-text"
              rows="4"
              placeholder="Your message"
              name="message"
            />
          </label>
          <button
            type="submit"
            className="bg-accent dark:bg-dark-heading-text text-white dark:text-black py-2 px-8 mr-2 mt-4 text-center text-sm font-defaultSans"
          >
            Send
          </button>
          <input
            type="reset"
            value="Clear"
            className="bg-transparent text-accent dark:text-dark-heading-text py-2 px-8 border border-accent dark:border-dark-heading-text mt-4 text-center text-sm font-defaultSans"
          />
        </form>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
