import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';

const CbuMarketingProjectsPage = () => (
  <Layout>
    <SEO title="CBU Marketing Applications Case Study – Work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <aside className="text-heading-text dark:text-dark-heading-text text-xs md:text-sm font-worksans font-semibold uppercase">
        Case Study
      </aside>
      <TitleBlock
        pageTitle="CBU Marketing Applications"
        shortDescription="CBU Marketing Applications is an internal web app that helps California Baptist University's marketing team manage various projects and interface with internal systems."
      />

      <div className="case-study grid grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My role
          </h2>
          <p className="text-base leading-tight">
            UX/UI designer, project manager, and front-end developer.
          </p>
        </div>
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My methods
          </h2>
          <p className="text-base leading-tight">
            Wireframes, prototypes, UX research, UX writing, visual design,
            project management, and front-end development (HTML/CSS/JS).
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <div className="case-study-narrative mx-auto my-8 w-11/12 md:w-3/4">
        <h2 className="mb-4 text-3xl md:text-4xl">Overview</h2>

        <p>
          California Baptist University (CBU) is one of Southern California's
          fastest growing university. With an enrollment of over 10,000
          students, and over 1,000 employees, CBU's Marketing unit is tasked
          with providing professional marketing services across print, digital,
          and advertising mediums. I served as both project and design lead with
          a small supporting team (one content designer, one marketing
          specialist, and one backend developer).
        </p>

        <h2 className="my-8 text-3xl md:text-4xl">Problem</h2>

        <p>
          CBU's Marketing unit provides a number of services ranging from
          marketing websites to print collateral. In order to scale the demand
          for their services from internal departments, they needed a central
          system that could unite various functions and systems to expedite
          their work. At the time, a number of legacy systems were used, but
          they were very rigid, not user friendly, required individual accounts,
          and required contracting with outside vendors whenever maintenance or
          improvements were needed.
        </p>

        <h2 className="my-8 text-3xl md:text-4xl">Process</h2>
        <p>
          For the design component of this project, I followed a four-phased
          approach:
        </p>
        <ul>
          <li>
            <AnchorLink
              to="/work/cbu-marketing-applications#discovery"
              title="Discovery"
            >
              Discovery
            </AnchorLink>{' '}
            &mdash; identified project scope and established framework for
            minimum viable product
          </li>
          <li>
            <AnchorLink
              to="/work/cbu-marketing-applications#design"
              title="Design"
            >
              Design
            </AnchorLink>{' '}
            &mdash; designed the UX (wireframes and simple prototype), designed
            the UI (high fidelity designs)
          </li>
          <li>
            <AnchorLink
              to="/work/cbu-marketing-applications#research"
              title="Research"
            >
              Research
            </AnchorLink>{' '}
            &mdash; performed user research and validation
          </li>
          <li>
            <AnchorLink
              to="/work/cbu-marketing-applications#development"
              title="Development"
            >
              Development
            </AnchorLink>{' '}
            &mdash; built the front-end
          </li>
        </ul>

        <h3 id="discovery" className="my-4 text-2xl md:text-3xl">
          Discovery
        </h3>
        <p>
          Initial discovery for this project focused on the two different types
          of users: Marketing unit staff who would use the system everyday, and
          university staff who would use the system to submit project requests
          and marketing content. I conducted user research via group and
          individual user interviews that enabled me to identify the unique
          needs of these users. Some of the questions I asked included:
        </p>
        <ul>
          <li>How do you use the current systems?</li>
          <li>How do you complete work?</li>
          <li>
            What are the biggest pain points for you with the current systems?
          </li>
          <li>What is an ideal feature you’d like to see implemented?</li>
        </ul>
        <p>
          What emerged from this research was that we needed an umbrella system
          with various features (e.g. project management, marketing content
          collection, etc.) that function as &#8220;apps&#8221;.
        </p>
        <h3 id="design" className="my-4 text-2xl md:text-3xl">
          Design
        </h3>
        <p>
          I sketched some preliminary wireframes to identify necessary
          functionality and establish the foundation. Then, I moved onto
          designing the UI, choosing to be conservative both in use of color to
          match the CBU brand, and visual hierarchy as it was important to not
          clutter the interface for two reasons: 1) the end user needed to be
          able to use the system with ease; and 2) the marketing staff needed to
          be able to review and process requests quickly. I also worked with our
          graphic designers to design some icons for the various features.
        </p>
      </div>
    </div>
    <div className="w-11/12 md:w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12 lg:w-1/2">
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/cbu-marketing-applications-signin.jpg"
                alt="CBU Marketing Applications sign-in"
                width={600}
              />
              <p className="caption">CBU Marketing Applications sign-in</p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/cbu-marketing-applications-dashboard.jpg"
                alt="CBU Marketing Applications dashboard"
                width={600}
              />
              <p className="caption">CBU Marketing Applications dashboard</p>
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12 lg:w-1/2">
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/cbu-marketing-applications-project.jpg"
                alt="CBU Marketing Applications Project Request"
                width={600}
              />
              <p className="caption">
                CBU Marketing Applications Project Request
              </p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/cbu-marketing-applications-url.jpg"
                alt="CBU Marketing Applications URL checker"
                width={600}
              />
              <p className="caption">CBU Marketing Applications URL checker</p>
            </figure>
          </div>
        </div>
        <div className="mx-auto w-11/12 md:w-3/4">
          <div className="case-study-narrative mx-auto my-8 mb-16 w-11/12 md:w-3/4 2xl:w-1/2">
            <h3 id="development" className="my-4 text-2xl md:text-3xl">
              Development
            </h3>
            <p>
              In my role as front-end developer, I used the Bootstrap framework
              as a base to help build the initial prototype and eventual MVP.
              This was a way to get up and running quickly and allow me to
              create the appropriate placeholders for the backend developer to
              tie everything together. Once my front-end development was done, I
              worked with the backend developer to complete overall development
              and launch the product.
            </p>
            <h2 className="my-8 text-3xl md:text-4xl">Reflection</h2>
            <p>
              I was in a unique position to see the results of all the hard work
              the team and I did on this product throughout my time at CBU. The
              initial launch signaled a significant shift in the way CBU
              Marketing operated as uniting seperate systems into one platform
              enabled greater efficiencies in both planning and execution of
              marketing tasks.
            </p>
          </div>
          <div className="next-steps mx-auto my-8 mb-16 w-11/12 md:w-3/4">
            <ul className="list-none text-heading-text dark:text-dark-heading-text text-base md:text-xl font-worksans font-semibold 2xl:text-center">
              <li className="md:inline-block">
                <Link
                  className="next-steps-left"
                  to="/work"
                  title="Back to my work"
                >
                  Back to my work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default CbuMarketingProjectsPage;
