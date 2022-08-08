import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import Button from '../../components/Button';
import EsriCartFlyoutGif from '../../images/esri-cartflyout.gif';

const EsriCartFlyoutCaseStudy = () => (
  <Layout>
    <SEO title="Esri Cart Flyout Case Study" />

    <section className="mt-8 py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock pageCategory="Case Study" pageTitle="Esri cart flyout" />
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-4xl mb-8">
          Integrating a familiar e-commerce pattern
        </h3>
        <div>
          <StaticImage
            src="../../images/esri-cart-flyout-hero-2x.png"
            alt="Esri cart flyout design screenshot"
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
              <p className="leading-tight">UX designer</p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My responsibilities
              </h2>
              <p className="leading-tight">
                UX design and interaction strategy
              </p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My methods
              </h2>
              <p className="leading-tight">
                UX research, UX design, UI design, rapid prototyping, UX writing
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="mb-6 md:pl-6">
              <p>
                As part of a longer term e-commerce strategy, Esri needed a way
                to both communicate additional information and allow users to
                make changes before starting checkout for specific products,
                including product bundles that support customizing the quantity
                of products within the bundle.
              </p>
              <p className="mt-4">
                I designed a modular component with multiple use cases such as
                add-to-cart summary, ability to change cart quantity of products
                already in cart, and listing available payment methods. There
                are other use cases planned for future releases, but the
                flexibility of the modularized component allows this design to
                scale and respond to both business and user needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 bg-white  dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Context</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Communicating information to customers and helping them make decisions
        </h3>

        <p className="mx-auto md:w-3/4">
          A common pattern found in many e-commerce experiences is a modal or
          flyout component that a user sees after they add a product to cart,
          and typically one step before starting checkout.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          Esri needed a way to both communicate additional information before
          the checkout process started while also allowing users to make changes
          before starting checkout for specific products, including product
          bundles (a collection of two or more products) and the ability to
          customize the quantity of products within a given bundle.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Process</h2>
        <h3 className="text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Balancing business and user needs to reduce friction in the checkout
          process
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          Esri's e-commerce business strategy broadly focused on enabling
          customers to purchase as many products as possible. Featuring over 50
          unique products, Esri's product catalog is complex. To help customers
          during their purchase journey, a cart flyout was envisioned to create
          the space needed to communicate important details while also capturing
          key customer input before formally starting checkout. To provide
          design support for this strategy, I followed three distinct phases
          that governed my work: research, discovery, and design.
        </p>
        <h4 className="my-8">Research</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          To clearly focus my design effort, I worked with Esri's UX research
          and e-commerce product management teams to gather data on a) what
          customers were looking for before completing checkout and b) what
          products needed users to make decisions before starting checkout.
          During this part of the process, I interviewed stakeholders in
          customer support and business development departments, and reviewed
          customer support tickets that referenced e-commerce and completed
          order e-mail survey results. I learned the following:
        </p>
        <ul className="keys list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Customer service received over 1,000 calls related to which payment
            methods Esri supported for online purchases
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Sales teams needed greater flexibility in building product bundles
            for specific sales use cases such as consultative sales
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Some customer countries have legal requirements where Esri is
            required to disclose specific information before starting a purchase
            transaction (i.e. disclosing VAT in EU countries)
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Product management needed to communicate specific product
            information to customers (i.e. product compatibility)
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Some customer decision-making is happening in the cart, making it
            difficult to move through the checkout flow seamlessly (i.e.
            choosing a configurable option such as operating system or license
            term)
          </li>
        </ul>
        <p className="mx-auto md:w-3/4 mt-4">
          To help finalize project scope and prepare for design ideation, I
          crafted problem statements based on these learnings.
        </p>
        <figure className="mx-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-research-problem-statements-2x.png"
            alt="Esri cary flyout problem statements screenshot"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Problem statements based on research learnings
          </figcaption>
        </figure>
        <h4 className="my-8">Discovery</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          Moving forward, I knew I needed to design a cart flyout component, and
          having a clearer understanding of which content the component needed
          to support based on research outputs, I started a discovery process to
          better understand how other e-commerce sites a) used cart flyout/modal
          component experiences and b) what types of content appeared within
          those components.
        </p>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-discovery.png"
            alt="Esri cart flyout discovery screenshot"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            A sampling of cart flyout/modal experiences from e-commerce sites
          </figcaption>
        </figure>

        <h4 className="my-8">Design</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          After evaluating all of the research and discovery findings, I
          determined that a modular design pattern would give the most
          flexibility and maximize the utility of the cart flyout component,
          especially given its numerous content needs. To help visualize this, I
          designed a diagram that contained the modules and example scenarios
          using the modules.
        </p>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-design-modules-2x.png"
            alt="Esri cart flyout modules diagram"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Diagram with content modules and scenarios for cart flyout content
          </figcaption>
        </figure>
        <p className="mx-auto md:w-3/4 mt-4">
          The next part of the design process was designing the actual cart
          flyout UI. I designed a flyout UI for each module ensuring consistency
          with Esri's brand type, color, and button patterns.
        </p>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-design-base-module-2x.png"
            alt="Esri cart flyout base module UI"
            className="my-6"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Cart flyout UI &ndash; base module
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-design-base-module-mobile-2x.png"
            alt="Esri cart flyout base module UI"
            className="my-6"
            width={500}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Cart flyout UI &ndash; base module (mobile)
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-design-bundle-module-2x.png"
            alt="Esri cart flyout base module UI"
            className="my-6"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Cart flyout UI &ndash; product bundle module
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-design-configuration-module-2x.png"
            alt="Esri cart flyout configuration module UI"
            className="my-6"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Cart flyout UI &ndash; configuration module
          </figcaption>
        </figure>
        <p className="mx-auto md:w-3/4 mt-4">
          Once I completed design of the various modules, I moved to design the
          different combined module scenarios.
        </p>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-design-base-configuration-module-2x.png"
            alt="Esri cart flyout base and configuration module UI"
            className="my-6"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Cart flyout UI &ndash; base + configuration modules
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/esri-cart-flyout-design-base-bundle-mobile-2x.png"
            alt="Esri cart flyout base and configuration module UI"
            className="my-6"
            width={500}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Cart flyout UI &ndash; base + bundle modules (mobile)
          </figcaption>
        </figure>
        <p className="mx-auto md:w-3/4 mt-4">
          The next part of the process was figuring out the actual interaction.
          Working with an interaction designer and front-end engineer, we landed
          on a subtle animation that has the flyout combining entering the
          screen from the right and staying persistent until the user makes an
          action to either continue to cart to begin the checkout process or to
          close the flyout to continue shopping.
        </p>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <img
            className="my-6"
            src={EsriCartFlyoutGif}
            alt="Cart flyout animted GIF"
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Cart flyout UI in action
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Outcomes</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Evaluated success and opportunities to improve
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          The cart flyout was a successful project that saw collaboration across
          many cross-functional teams including product, design, customer
          support, and sales. The following outcomes were observed:
        </p>
        <ul className="list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Since base module launched, e-commerce sales have seen a YOY
            increase of 20%
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Modular design creates unlimited possibilities for cross-sell,
            up-sell, and customer cart management
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Customer service has reported a decrease in calls related to payment
            methods for e-commerce once the base module that included payment
            methods launched
          </li>
        </ul>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Reflection</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Incorporate user research for next iterations
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          Overall, I enjoyed working through the various business and user needs
          this project uncovered. Esri's business is complex, as is their
          product portfolio, so anything I can do to help improve the overall
          e-commerce user experience is a good thing. One interesting aspect of
          this project is that it began the process of moving some of the
          decision making moments out of cart. This resulted in alerting the
          customer to those decision points earlier while also allowing them to
          make those decisions before completing checkout to decrease the amount
          of time required to complete orders.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          One drawback for this project was the lack of core user research. For
          next iterations, I'd love to talk to real users and identify areas to
          improve the design and make it work better for them. There's always a
          balancing act between ensuring business and user needs are met. This
          often does not happen equally, but as a UX professional my job is
          always to advocate for the user.
        </p>
      </div>
    </section>
    <section className="bg-darkNavy dark:bg-accent/40 py-8 w-full">
      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2">
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/matterport-product-page">← Previous Project</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            Matterport &mdash; elevating product details to improve the purchase
            experience
          </h3>
          <Button to="/work/matterport-product-page">Read case study</Button>
        </div>
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/cbu-website-redesign">Next Project →</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            CBU &mdash; redesigning the digital face of a university
          </h3>
          <Button to="/work/cbu-website-redesign">Read case study</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default EsriCartFlyoutCaseStudy;
