import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import Button from '../../components/Button';

const MatterportProductPageCaseStudy = () => (
  <Layout>
    <SEO title="Matterport Product Page Case Study" />
    <section className="mt-8 py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageCategory="Case Study"
          pageTitle="Matterport product page"
        />
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-4xl mb-8">
          Elevating product details to improve the purchase experience
        </h3>
        <div>
          <StaticImage
            src="../images/matterport-product-page-case-study-hero.png"
            alt="Matterport Product Page design screenshot"
            className="mb-4 border border-accent/20"
            //   width={600}
          />
        </div>

        <div className="case-study grid grid-cols-1 gap-1 my-2 md:my-8 md:grid-cols-3 md:gap-8">
          <div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My role
              </h2>
              <p className="leading-tight">Product designer</p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My responsibilities
              </h2>
              <p className="leading-tight">Product design</p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My methods
              </h2>
              <p className="leading-tight">
                UX research, UX strategy, UI design
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="my-6 md:pl-6">
              <p>
                Matterport's existing e-commerce platform strategy was focused
                on getting the customer through the purchase flow as quickly as
                possible. This meant that important details customers needed to
                make decisions were missing, creating an opportunity.
              </p>
              <p className="mt-4">
                Based on user research results and customer survey data, I
                designed a new product page to help increase customer education
                by elevating product differentiators and product relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Context</h2>
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Improving the e-commerce UX strategy to meet customer expectations
        </h3>
        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../images/buy.matterport.com_cart.png"
            alt="Matterport Product Page design screenshot"
            className="mb-6 border border-accent/20"
            //   width={600}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Current product detail experience
          </figcaption>
        </figure>
        <p className="mx-auto mt-8 md:w-3/4">
          A critical piece of most e-commerce strategies, product pages are
          well-known to help increase buyer awareness and foster greater
          purchase conversion. Matterport's existing e-commerce platform
          strategy was focused on getting the customer through the purchase flow
          as quickly as possible and lacked product detail pages.
        </p>
        <p className="mx-auto md:w-3/4 mt-8">
          The current design adopted a product details modal rather than a
          product details page. This meant that important details customers
          needed to make purchase decisions were missing, which created an
          opportunity for further exploration and research into what problems
          the customers were facing during their purchase decision-making
          process.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Process</h2>
        <h3 className="text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Understanding user needs to create effective solutions
        </h3>
        <p className="mx-auto md:w-3/4 mt-8">
          Matterport's e-commerce business strategy broadly focused on actions
          to help customers complete e-commerce transactions. To provide design
          support for this strategy, I followed three design phases: research,
          discovery, and design.
        </p>
        <h4 className="my-8">Research</h4>
        <p className="mx-auto md:w-3/4 mt-8">
          To help understand which areas to focus on, I worked with Matterport's
          UX research team to design and moderate user interviews. Over the
          course of two weeks, we interviewed 10 customers and synthesized these
          key takeaways:
        </p>
        <ul className="keys list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Some customers reported not enough product information with the
            current modal experience
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Nearly all customers complained that there was no easy way to find
            additional product details
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            A handful of customers completed purchases directly from sites like
            Amazon and B&amp;H because they did a better job of explaining
            product details
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Many users were unaware of some of the other products Matterport
            sells
          </li>
        </ul>
        <p className="mx-auto md:w-3/4 mt-4">
          I also reviewed customer survey data to identify any e-commerce
          specific feedback. Not unsurprisingly, I found similarities between
          what we observed during user research and what was reported directly
          by customers where they shared their frustrations with the purchase
          experience.
        </p>
        <h4 className="my-8">Discovery</h4>
        <p className="mx-auto md:w-3/4 mt-8">
          Equipped with research results, I went about investigating how other
          e-commerce sites use product detail pages (or if they followed a
          similar strategy to Matterport and didn't use them). As part of this
          discovery process, I performed a content audit and noted different
          types of content I found. This was important for two reasons: 1)
          identifying patterns and 2) establishing benchmarks to measure designs
          against.
        </p>

        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../images/matterport-product-page-discovery-content-audit.png"
            alt="Matterport Product Page content audit discovery screenshot"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Product detail page competitive content audit
          </figcaption>
        </figure>
        <p className="mx-auto md:w-3/4 mt-4">
          Using the competitive content audit, I drew up a flow diagram to help
          me better visualize the types of content to target in my design.
        </p>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../images/matterport-product-page-discovery-figjam-flow.png"
            alt="Matterport Product Page FigJam discovery flow"
            className="my-6 border border-accent/20"
            //   width={900}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Product detail page FigJam discovery flow
          </figcaption>
        </figure>
        <p className="mx-auto md:w-3/4 mt-4">
          I also used this time to work with product management and engineering
          cross-functional partners to involve them in the process and better
          understand any challenges or issues that might affect the design.
        </p>

        <h4 className="my-8">Design</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          Leveraging the research and discovery work, I started the design phase
          by trying to answer a question: what would a Matterport product detail
          page look like? My first task was to create a content hierarchy, a UX
          technique I've used before to help me establish the page's story. I
          then took the content hierarchy and created a wireframe.
        </p>
        <div className="grid grid-cols-1 gap-1 max-w-7xl mx-auto md:px-8 md:grid-cols-3 md:gap-8 md:w-3/4">
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../images/matterport-product-page-design-content-hierarchy.png"
              alt="Matterport Product Page content hierarchy"
              className="my-6 border border-accent/20"
              //   width={900}
              height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Product detail page content hierarchy
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center md:col-span-2">
            <StaticImage
              src="../images/matterport-product-page-design-content-wireframe.png"
              alt="Matterport Product Page content wireframe"
              className="my-6 border border-accent/20"
              //   width={900}
              // height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Product detail page content wireframe
            </figcaption>
          </figure>
        </div>
        <p className="mx-auto md:w-3/4 mt-4">
          With my initial page design structure established, I then designed the
          UI for the page, using Matterport's Supernova design system to ensure
          consistency with colors, type, and components such as buttons.
        </p>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../images/matterport-product-page-design-ui-min.png"
            alt="Matterport Product Page UI design"
            className="my-6 border border-accent/20"
            //   width={900}
            // height={800}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Product detail page UI design
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Outcomes</h2>
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Practicing user-centered design and strengthening cross-functional
          collab
        </h3>
        <p className="mx-auto md:w-3/4 mt-8">
          At time of writing this case study, this design has yet to ship.
          However, some positive outcomes were achieved with this project:
        </p>
        <ul className="list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            User research and resulting analysis played a critical role in the
            final design
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Cross-functional partnership between product, engineering, and
            design strengthened, establishing a blueprint for future
            collaboration
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Completing this project was an important first step in re-evaluating
            Matterport's e-commerce strategy to serve customer needs
          </li>
        </ul>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Reflection</h2>
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          More user research and design iteration
        </h3>
        <p className="mx-auto md:w-3/4 mt-8">
          While I'm satisfied with the design process for this project, I would
          have liked a larger sample size in the earlier user research work. I
          also want to test the design with users to gauge whether or not it's
          successful as a solution to the problems uncovered in the research
          phase. As is always the case with design, it is never done and the
          next iteration should incorporate learnings from the next round of
          user research. Finally, I want to create a version of this design for
          Matterport's SaaS plan that creates parity between the two types of
          Matterport's product portfolio.
        </p>
      </div>
    </section>

    <section className="bg-darkNavy dark:bg-accent/40 py-8 w-full">
      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2">
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/redlands-web-design-class">← Previous Project</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            University of Redlands web design class &mdash; teaching web design
            to a new generation of students using Figma
          </h3>
          <Button to="/work/redlands-web-design-class">Read case study</Button>
        </div>
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/esri-cart-flyout">Next Project →</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            Esri cart flyout &mdash; integrating a familiar e-commerce pattern
          </h3>
          <Button to="/work/esri-cart-flyout">Read case study</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default MatterportProductPageCaseStudy;
