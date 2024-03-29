import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import MiniTitleBlock from '../../components/MiniTitleBlock';
import WorkCard from '../../components/WorkCard';
import Skills from '../../components/Skills';

// const ListLink = (props) => (
//   <li className="text-heading-text text-2xl font-defaultSans font-semibold my-4">
//     {/* <Link to={props.to} className="underline">
//       {props.children}
//     </Link> */}
//   </li>
// );

// TODO: create a template group for this
const WorkPage = () => (
  <Layout>
    <SEO title="My work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <TitleBlock
        pageTitle="My work"
        shortDescription="I work on a variety of projects that combine elements of design, development, and content to form engaging user experiences."
      />
      {/* <div className="mx-auto w-11/12 md:w-3/4 mt-8 mb-12"> */}
      <div className="mx-auto w-11/12 md:w-3/4 mt-8 mb-12">
        <MiniTitleBlock title="Where I've Worked" />
      </div>
      <div className="work grid md:grid-cols-1 md:gap-8 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
        <div>
          <Link
            to="/work/matterport"
            className="text-text dark:text-dark-heading-text"
          >
            <StaticImage
              src="../images/matterport-thumb.jpg"
              alt="Matterport logo"
            />
            <WorkCard projectName="Matterport" />
          </Link>
          <Skills skills="UX • UI • COACHING" />
        </div>
        <div>
          <Link
            to="/work/esri"
            className="text-heading-text dark:text-dark-heading-text"
          >
            <StaticImage src="../images/esri-thumb.jpg" alt="Esri logo" />
            <WorkCard projectName="Esri" />
          </Link>
          <Skills skills="UX • STRATEGY • COACHING" />
        </div>
        <div>
          <Link
            to="/work/california-baptist-university"
            className="text-heading-text dark:text-dark-heading-text"
          >
            <StaticImage src="../images/cbu-thumb.jpg" alt="CBU logo" />
            <WorkCard projectName="California Baptist University" />
          </Link>
          <Skills skills="UX/UI • STRATEGY  • PEOPLE MANAGEMENT • DEVELOPMENT" />
        </div>
      </div>
      {/* <span className="text-text dark:text-dark-text text-sm font-defaultSans font-semibold uppercase">
          September 2019 &mdash; present
        </span>
        <p className="text-heading-text text-xl md:text-2xl font-defaultSans font-semibold">
          <Link to="/work/esri" title="Esri">
            Esri
          </Link>
        </p>
        <p className="font-sourceSerifPro font-normal italic text-text text-sm md:text-lg">
          I'm currently in a senior UX role at Esri where I focus on e-commerce
          UX strategy.{' '}
        </p>
        <p className="mb-8">
          <Link
            to="/work/esri"
            title="See work I've done at Esri"
            className="font-defaultSans font-semibold text-sm md:text-base"
          >
            See work I've done at Esri
          </Link>
        </p>

        <span className="text-text dark:text-dark-text text-sm font-defaultSans font-semibold uppercase">
          February 2012 &mdash; September 2019
        </span>
        <p className="text-heading-text text-xl md:text-2xl font-defaultSans font-semibold">
          <Link to="/work/california-baptist-university">
            California Baptist University
          </Link>
        </p>
        <p className="font-sourceSerifPro font-normal italic text-text text-sm md:text-lg">
          As Director of Web Applications Development, I led design and
          engineering for enterprise applications. Prior to that, I held various
          roles managing CBU's website design and development team.{' '}
        </p>
        <p className="mb-8">
          <Link
            to="/work/california-baptist-university"
            title="See work I've done at CBU"
            className="font-defaultSans font-semibold text-sm md:text-base"
          >
            See work I've done at CBU
          </Link>
        </p>
        <span className="text-text dark:text-dark-text text-sm font-defaultSans font-semibold uppercase">
          March 2009 &mdash; February 2012
        </span>
        <p className="text-heading-text text-xl md:text-2xl font-defaultSans font-semibold">
          University of California at Riverside
        </p>
        <p className="font-sourceSerifPro font-normal italic text-text text-sm md:text-lg">
          As a Web/UI Designer, I built websites for the Division of Student
          Affairs. Prior to that, I was a Web Developer that built websites for
          the Division of Finance and Business Operations.
        </p>
      </div> */}

      <div className="mx-auto w-11/12 md:w-3/4 mt-8 mb-12">
        <MiniTitleBlock title="Additional Projects" />
      </div>
      <div className="work grid md:grid-cols-2 md:gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <Link
            to="/work/how-much-oxalate"
            className="text-heading-text dark:text-dark-heading-text"
          >
            <StaticImage
              src="../images/how-much-oxalate-thumb.jpg"
              alt="Screenshot of How Much Oxalate website"
            />
            <WorkCard projectName="How Much Oxalate" />
          </Link>
          <Skills skills="UX • UI • CONTENT • DEVELOPMENT" />
        </div>
        <div>
          <Link
            to="/work/arousal-architecture"
            className="text-heading-text dark:text-dark-heading-text"
          >
            <StaticImage
              src="../images/arousal-architecture-thumb.jpg"
              alt="Screenshot of Arousal Architecture Assessment website"
            />
            <WorkCard projectName="Arousal Architecture&trade;" />
          </Link>
          <Skills skills="UX • UI • DEVELOPMENT" />
        </div>
      </div>

      <div className="work grid md:grid-cols-2 md:gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <Link
            to="/work/cbu-website-redesign"
            className="text-heading-text dark:text-dark-heading-text"
          >
            <StaticImage
              src="../images/cbu-website-redesign-thumb.jpg"
              alt="Screenshot of CBU Website Redesign"
            />
            <WorkCard projectName="CBU Website Redesign" />
          </Link>
          <Skills skills="UX • UI • CONTENT • DEVELOPMENT" />
        </div>
        <div>
          <Link
            to="/work/cbu-marketing-applications"
            className="text-heading-text dark:text-dark-heading-text"
          >
            <StaticImage
              src="../images/cbu-marketing-applications-thumb.jpg"
              alt="Screenshot of CBU Marketing Applications web app"
            />
            <WorkCard projectName="CBU Marketing Applications" />
          </Link>
          <Skills skills="UX • UI" />
        </div>
      </div>
    </div>
  </Layout>
);

export default WorkPage;
