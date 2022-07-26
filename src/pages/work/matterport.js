import * as React from 'react';
// import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';

const MatterportWorkPage = () => (
  <Layout>
    <SEO title="Matterport – Work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <TitleBlock
        pageTitle="Matterport"
        shortDescription="Leaders in spatial data focused on digitizing and indexing the built world."
      />

      <div className="case-study grid grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <h2 className="uppercase font-worksans text-darkPurple font-semibold text-xs md:text-sm">
            My role
          </h2>
          <p className="text-base leading-tight">Senior Product Designer</p>
        </div>
        <div>
          <h2 className="uppercase font-worksans text-darkPurple font-semibold text-xs md:text-sm">
            My methods
          </h2>
          <p className="text-base leading-tight">
            Human-centered design, content strategy, wireframes, prototypes, UX
            research, UX writing.
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <div className="case-study-narrative mx-auto my-8 w-11/12 md:w-3/4">
        <p>
          <a className="alt" href="https://matterport.com" title="Matterport">
            Matterport
          </a>{' '}
          is the leading spatial data company focused on digitizing and indexing
          the built world. Leveraging an all-in-one 3D data platform engine,
          Matterport enables anyone to turn a space into an accurate and
          immersive digital twin which can be used to design, build, operate,
          promote, and understand any physical space.
        </p>
        <p>
          I was hired in 2021 as a Senior Product Designer to focus on their web
          and e-commerce experiences. At Matterport, I worked with
          cross-functional teams to plan, design, and launch improved user
          experiences for Matterport's website and purchase site. I also coached
          and mentored junior designers, and served as an e-commerce subject
          matter expert.
        </p>
        <h2 className="my-8 text-3xl md:text-4xl">Selected Work</h2>

        {/* <p>Below are some selected examples from the work I've done at Matterport.</p>
        <ul id="top" className="mb-16">
          <li>
            <AnchorLink
              to="/work/matterport#accessories"
              title="Accessories navigation"
            >
              Accessories navigation
            </AnchorLink>{' '}
            &mdash; new informaion architecture to support selling accessories
          </li>
          <li>
            <AnchorLink
              to="/work/matterport#accessories"
              title="Accessories navigation"
            >
              Product page
            </AnchorLink>{' '}
            &mdash; new product page design
          </li>
          <li>
            <AnchorLink to="/work/matterport#partners" title="Partner page">
              Partners site
            </AnchorLink>{' '}
            &mdash; marketing pages
          </li>
        </ul>
*/}
        <h3 id="accessories" className="my-4 text-2xl md:text-3xl">
          E-commerce Navigation Project
        </h3>
        <p>
          In order to add additional revenue opportunities through Matterport's
          e-commerce experience, the company wanted to start selling accessories
          for specific products. To support this objective, I designed a new
          navigation pattern that elevated product categories.
        </p>
        <p>
          Adding a new product category to the e-commerce experience meant
          re-evaluating how that product categories appeared to users.
          Historically, Matterport sold accessories as part of bundled hardware
          kits, so this shift in product merchandising required analysis of the
          types of accessories for sale, relationship of those accessories to
          other product categories, and the simplest path to both educate and
          inform the user.
        </p>
        <p>
          I designed a few different iterations based on my understanding of the
          accessory products, and leaned on some user experience research
          findings to understand how best to position this to customers. Those
          findings also suggested that having clear visibility and understanding
          into the product being sold could make the difference between someone
          completing a purchase vs. closing the tab and moving on. In response,
          my designs focused on clear hierarchy, simple language use, and
          creating connective tissue between product categories.
        </p>
        <p>
          The final designs resulted in creating an information architecture
          pattern that included the all product categories, and applying
          Matterport's design system tokens across typography, color, and
          spacing elements.
        </p>
      </div>
    </div>

    <h4 className="my-8">Components</h4>
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-1 mx-auto w-11/12">
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/matterport-accessories-ia-tabs.jpg"
              alt="Tabbed navigation UI for product categories"
              // width={800}
            />
            <p className="caption pt-4">
              Tabbed navigation UI for product categories
            </p>
          </figure>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-1 mx-auto w-11/12 mt-4">
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/matterport-accessories-ui-cameramethod.jpg"
              alt="Drop-down UI for product relationships (accessories by camera)"
              // width={800}
            />
            <p className="caption pt-4">
              Drop-down UI for product relationships <br /> (accessories by
              camera)
            </p>
          </figure>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-1 mx-auto w-11/12 mt-4">
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/matterport-accessories-ui-cameratype.jpg"
              alt="Drop-down UI for product relationships (camera by type)"
              // width={800}
            />
            <p className="caption pt-4">
              Drop-down UI for product relationships <br /> (camera by type)
            </p>
          </figure>
        </div>
      </div>

      <h4 className="my-8">Final Designs</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12 lg:w-1/2">
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/matterport-accessories-final-01.png"
              alt="Completed navigation design - cameras"
              // width={600}
            />
            <p className="caption pt-4">
              Completed navigation design - cameras
            </p>
          </figure>
        </div>
        <div className="mx-auto">
          <figure>
            <StaticImage
              className="text-center"
              src="../../images/matterport-accessories-final-02.png"
              alt="Completed navigation design - accessories"
              // width={600}
            />
            <p className="caption pt-4">
              Completed navigation design - accessories
            </p>
          </figure>
        </div>
      </div>
      <div className="mx-auto text-center my-12">
        <p>
          <em>Other work for Matterport available by request</em>
        </p>
      </div>
    </div>
  </Layout>
);

export default MatterportWorkPage;
