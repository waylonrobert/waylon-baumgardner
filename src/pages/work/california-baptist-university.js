import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import WorkCard from '../../components/WorkCard';

const CbuWorkPage = () => (
  <Layout>
    <SEO title="California Baptist University – Work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <TitleBlock
        pageTitle="California Baptist University"
        shortDescription="One of the top private Christian colleges and universities in Southern California that confers associate's, bachelor's, master's, doctoral and credential degrees."
      />

      <div className="case-study grid grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs md:text-sm">
            My role
          </h2>
          <p className="text-base leading-tight">
            Hired as Website Manager, promoted to Senior Manager of Web
            Services, and later to Director of Web Applications Development.
          </p>
        </div>
        <div>
          <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs md:text-sm">
            My methods
          </h2>
          <p className="text-base leading-tight">
            Human-centered design, content strategy, wireframes, prototypes, UX
            research, UX writing, front-end development, project management,
            direct report goal/task setting.
          </p>
        </div>
      </div>
      <div className="case-study-narrative mx-auto my-8 w-11/12 md:w-3/4">
        <p>
          <a
            href="https://calbaptist.edu"
            title="California Baptist University"
          >
            California Baptist University
          </a>{' '}
          (CBU) is one of Southern California's fastest growing private
          universities. As of Fall 2020, CBU boasts a total enrollment over
          11,000 and offers a diverse mix of degrees and credential programs
          primarily serving students who reside in the Inland Empire communities
          of Riverside and San Bernardino.
        </p>
        <p>
          I was hired in 2012 as a Website Manager to function as both an
          individual contributor designing and developing new pages on the main
          university website and a manager tasked with building a web team. In
          2015, I was promoted to Senior Web Services Manager where my role as
          an individual contributor slowly shifted toward a person, process, and
          project manager with larger, more strategic work as an area manager,
          helping steward the work of my employees. In 2018, I transferred
          departments from Marketing to Information Technology as Director of
          Web Applications Development for a greater challenge where I led a
          team focused on designing and developing enterprise web applications
          used daily by thousands of users.
        </p>
        <h2 className="my-8 text-3xl md:text-4xl">Selected Work</h2>
        <p>
          Review the following selected case studies that go over some of the
          work I did at CBU.
        </p>
      </div>

      <div className="work grid md:grid-cols-2 md:gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <Link
            to="/work/cbu-website-redesign"
            className="text-accent dark:text-dark-heading-text"
          >
            <StaticImage
              src="../../images/cbu-website-redesign-thumb.jpg"
              alt="Screenshot of CBU Website Redesign"
            />
            <WorkCard projectName="CBU Website Redesign" />
          </Link>
        </div>
        <div>
          <Link
            to="/work/cbu-marketing-applications"
            className="text-accent dark:text-dark-heading-text"
          >
            <StaticImage
              src="../../images/cbu-marketing-applications-thumb.jpg"
              alt="Screenshot of CBU Marketing Applications web app"
            />
            <WorkCard projectName="CBU Marketing Applications" />
          </Link>
        </div>
      </div>

      <div className="next-steps mx-auto my-8 mb-16 w-11/12 md:w-3/4">
        <ul className="list-none text-accent dark:text-dark-heading-text text-base md:text-xl font-defaultSans font-semibold 2xl:text-center">
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
  </Layout>
);

export default CbuWorkPage;
