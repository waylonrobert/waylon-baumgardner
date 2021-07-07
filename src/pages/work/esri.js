import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';

const EsriWorkPage = () => (
  <Layout>
    <SEO title="Esri – Work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4">
      <TitleBlock
        pageTitle="Esri"
        shortDescription="Makers of the most powerful GIS mapping &amp; spatial analytics software."
      />

      <div className="case-study grid grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My role
          </h2>
          <p className="text-base leading-tight">
            Hired as a Senior UX Architect (designer), then promoted to UX
            Strategist.
          </p>
        </div>
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My methods
          </h2>
          <p className="text-base leading-tight">
            Human-centered design, content strategy, wireframes, prototypes, UX
            research, UX writing.
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto w-11/12 md:w-3/4">
      <div className="case-study-narrative mx-auto my-8 w-11/12 md:w-3/4">
        <p>
          <a href="https://esri.com" title="Esri">
            Esri
          </a>{' '}
          is one of the most established and sophisticated makers of GIS
          software. With over 350,000 organizations actively using Esri
          software, Esri serves virtually every industry including retail,
          government, education, conservation, and many others. Built upon their
          ArcGIS platform, Esri makes over 50 different software products
          designed for multiple GIS mapping and spatial analytics use cases.
        </p>
        <p>
          I was hired in 2019 as a Senior UX Architect and immediately assigned
          to the e-commerce store redesign project team where I worked to design
          e-commerce experiences on Esri's store redesign that launched in March
          2020. In early 2021, I was promoted to UX Strategist where my work
          aligns e-commerce UX strategy with business strategy.
        </p>
        <h2 className="my-8 text-3xl md:text-4xl">Selected Work</h2>

        <p>Below are some selected examples from the work I've done at Esri.</p>

        <h3 className="my-4 text-2xl md:text-3xl">Buy Pages</h3>
        <p>
          Buy pages are the primary starting point to kick-off the buyer's
          transactional journey from evaluating product information to checking
          out.
        </p>
        <p>
          For the initial launch, I designed several different buy page variants
          to accommodate different product types. Because some of Esri's
          software is bundled and some of it is sold individually, it was
          important to have different variants to accommodate these use cases.
        </p>
      </div>
    </div>

    <h4 className="my-8">Wireframes</h4>
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12">
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/esri-buypages-wireframes-01.jpg"
              alt="Buy page wireframe for primary products with cross-sell and/or up-sell"
              width={600}
            />
            <p className="caption">
              Buy page wireframe for primary products with cross-sell and/or
              up-sell
            </p>
          </figure>
        </div>
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/esri-buypages-wireframes-02.jpg"
              alt="Buy page wireframe for primary products with cross-sell and/or up-sell (tabbed interface)"
              width={600}
            />
            <p className="caption">
              Buy page wireframe for primary products with cross-sell and/or
              up-sell
              <br />
              (tabbed interface)
            </p>
          </figure>
        </div>
      </div>
      <h4 className="my-8">Completed Design</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12">
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/esri-buypages-ui-01.jpg"
              alt="Completed buy page UI for primary products with cross-sell and/or up-sell"
              width={600}
            />
            <p className="caption">
              Completed buy page UI for primary products with cross-sell and/or
              up-sell
            </p>
          </figure>
        </div>
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/esri-buypages-ui-02.jpg"
              alt="Completed buy page UI for primary products with cross-sell and/or up-sell (tabbed interface)"
              width={600}
            />
            <p className="caption">
              Completed buy page UI for primary products with cross-sell and/or
              up-sell
              <br />
              (tabbed interface)
            </p>
          </figure>
        </div>
      </div>

      <div className="mx-auto w-11/12 md:w-3/4">
        <div className="case-study-narrative mx-auto my-8 mb-16 w-11/12 md:w-3/4">
          <h3 className="my-4 text-2xl md:text-3xl">Cart Flyout</h3>
          <p>
            A common pattern found in many e-commerce experiences is a modal or
            flyout that a user sees after they add a product to cart (and
            typically one step before starting checkout).
          </p>
          <p>
            As part of a longer term e-commerce strategy, Esri needed a way to
            communicate additional information to users before checkout related
            to specific products while also allowing users to tak actions ahead
            of checkout.
          </p>
          <p>
            I designed a modular component with multiple use cases such as
            add-to-cart summary, ability to change cart quantity of products
            already in cart, and listing available payment methods.
          </p>
          <p>
            There are other use cases planned for future releases, but the
            flexibility of the modularized component allows this solution to
            scale and respond to both business and user needs.
          </p>
          <h4 className="my-8">Wireframes</h4>
          <div className="mx-auto text-center my-12">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/esri-cartflyout-wireframes-01.jpg"
                alt="Cart flyout"
                width={600}
              />
              <p className="caption">Cart flyout base wireframe</p>
            </figure>
          </div>
          <div className="mx-auto text-center my-12">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/esri-cartflyout-wireframes-02.jpg"
                alt="Cart flyout"
                width={600}
              />
              <p className="caption">
                Cart flyout product quantity adjustment wireframe
              </p>
            </figure>
          </div>
          <div className="mx-auto text-center mt-8 mb-16">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/esri-cartflyout-wireframes-03.jpg"
                alt="Cart flyout"
                width={600}
              />
              <p className="caption">
                Cart flyout list payment methods information wireframe
              </p>
            </figure>
          </div>
          <h4 className="my-8">Completed Design</h4>
        </div>
      </div>
      <div className="w-11/12 md:w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12">
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/esri-cartflyout-ui-01.jpg"
                alt="Cart flyout product quantity adjustment UI"
                width={800}
              />
              <p className="caption">
                Cart flyout product quantity adjustment UI
              </p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/esri-cartflyout-ui-02.jpg"
                alt="Cart flyout list payment methods information UI"
                width={800}
              />
              <p className="caption">
                Cart flyout list payment methods information UI
              </p>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto w-11/12 md:w-3/4">
        <div className="case-study-narrative mx-auto my-8 mb-16 w-11/12 md:w-3/4">
          <h3 className="my-4 text-2xl md:text-3xl">Store Landing Page</h3>
          <p>
            One of the challenges with selling lots of different products is
            determining how to get a new buyer started and engaged with their
            first visit.
          </p>
          <p>
            Recognizing that some of Esri's customers will start their buying
            journey on the Esri Store landing page, it was important that the
            page have structure and guiding points for new buyers, effectively
            answering the question for new users of where to start.
          </p>
          <p>
            Based on analytics of the existing store as well as feedback
            gathered from users earlier in the new Esri e-commerce project, I
            designed the store landing page to highlight Esri's key product
            areas and the products, while also retaining space for basic store
            purchase instructions, followed by potential exit paths.
          </p>
        </div>
        <h4 className="my-8">Wireframe</h4>
        <div className="mx-auto text-center">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/esri-storehome-wireframes-01.jpg"
              alt="Store landing page wireframe"
              width={600}
            />
            <p className="caption">Store landing page wireframe</p>
          </figure>
        </div>
        <h4 className="my-8">Completed Design</h4>
        <div className="mx-auto text-center">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/esri-storehome-ui-01.jpg"
              alt="Store landing page UI"
              width={600}
            />
            <p className="caption">Store landing page UI</p>
          </figure>
        </div>
      </div>
    </div>
    <div className="next-steps mx-auto my-8 mb-16 w-11/12 md:w-3/4">
      <ul className="list-none text-heading-text dark:text-dark-heading-text text-base md:text-xl font-worksans font-semibold">
        <li className="md:inline-block">
          <Link className="next-steps-left" to="/work" title="Back to my work">
            Back to my work
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default EsriWorkPage;
