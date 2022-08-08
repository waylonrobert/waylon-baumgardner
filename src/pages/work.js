import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';
import MiniTitleBlock from '../components/MiniTitleBlock';
import WorkCard from '../components/WorkCard';
import Skills from '../components/Skills';
import Button from '../components/Button';

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
    <section className="max-w-7xl p-4 mx-auto md:px-8">
      <TitleBlock
        pageTitle="My work"
        shortDescription="I work on a variety of projects that combine elements of design, development, and content to form engaging user experiences."
      />
    </section>
    <section className="mt-8 py-8 bg-accent/10 w-full">
      <section className="max-w-7xl p-4 mx-auto md:px-8">
        <div className="grid grid-cols-1 gap-16 mt-16 md:grid-cols-2">
          <article>
            <Link
              to="/work/matterport-product-page"
              title="Matterport product page case study"
              className="hover:text-red-700"
            >
              <StaticImage
                src="../images/matterport-product-page-case-study-hero.png"
                alt="Screenshot of Matterport product page redesign"
              />
              <h3 className="mt-8">Matterport product page</h3>
              <p className="mt-2 text-gray-500 dark:text-white/80">
                Elevating product details to improve the purchase experience.
              </p>
            </Link>
          </article>
          <article>
            <Link
              to="/work/esri-cart-flyout"
              title="Esri cart flyout case study"
              className="hover:text-red-700"
            >
              <StaticImage
                src="../images/esri-cart-flyout-hero-2x.png"
                alt="Screenshot of Esri cart flyout"
              />
              <h3 className="mt-8">Esri cart flyout</h3>
              <p className="mt-2 text-gray-500 dark:text-white/80">
                Integrating a familiar e-commerce pattern.
              </p>
            </Link>
          </article>
        </div>
        <div className="grid grid-cols-1 gap-16 mt-16 md:grid-cols-2">
          <article>
            <Link
              to="/work/cbu-website-redesign"
              title="CBU website redesign case study"
            >
              <StaticImage
                src="../images/cbu-website-redesign-hero-2x.jpg"
                alt="Screenshot of CBU Website Redesign"
              />
              <h3 className="mt-8">CBU website</h3>
              <p className="mt-2 text-gray-500 dark:text-white/80">
                Redesigning the digital face of a university.
              </p>
            </Link>
          </article>
          <article>
            <Link
              to="/work/cbu-website-redesign"
              title="CBU marketing applications case study"
            >
              <StaticImage
                src="../images/cbu-marketing-applications-min.jpg"
                alt="Screenshot of CBU Marketing Applications web app"
              />
              <h3 className="mt-8">CBU Marketing Applications platform</h3>
              <p className="mt-2 text-gray-500 dark:text-white/80">
                A suite of web apps to support achieving marketing objectives.
              </p>
            </Link>
          </article>
        </div>
        <div className="grid grid-cols-1 gap-16 mt-16 md:grid-cols-2 pb-12">
          <article>
            <Link
              to="/work/arousal-architecture"
              title="Arousal Architecture Case study"
            >
              <StaticImage
                src="../images/arousal-architecture-hero-2x-min.jpg"
                alt="Arousal Architecture Assessment design screenshot"
              />
              <h3 className="mt-8">Arousal Architecture&trade; Assessment</h3>
              <p className="mt-2 text-gray-500 dark:text-white/80">
                Transforming a paper assessment to an online experience
              </p>
            </Link>
          </article>
          <article>
            <Link
              to="/work/how-much-oxalate"
              title="How Much Oxalate case study"
            >
              <StaticImage
                src="../images/how-much-oxalate-hero-2x-min.jpg"
                alt="How Much Oxalate? screenshot"
              />
              <h3 className="mt-8">How Much Oxalate?</h3>
              <p className="mt-2 text-gray-500 dark:text-white/80">
                Finding oxalate content of known food and drink at ease.
              </p>
            </Link>
          </article>
        </div>
      </section>
    </section>
    <section className="bg-darkNavy dark:bg-accent/40 py-12 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="summary-statement dark:text-white text-dark-heading-text font-medium mb-4">
          Interested in working together?
        </h2>
        <p className="text-white">
          Got a design or development project you need help with? Let's chat and
          see how I can help.
        </p>
        <Button to="/contact">Contact me</Button>
      </div>
    </section>
  </Layout>
);

export default WorkPage;
