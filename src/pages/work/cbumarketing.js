import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import Button from '../../components/Button';

const CbuMarketingAppPageCaseStudy = () => (
  <Layout>
    <SEO title="CBU Marketing Applications Case Study" />
    <section className="mt-8 py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageCategory="Case Study"
          pageTitle="CBU Marketing Applications"
        />
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-4xl mb-8">
          A suite of web apps to support achieving marketing objectives
        </h3>
        <div>
          <StaticImage
            src="../../images/cbu-marketing-applications-dashboard.jpg"
            alt="CBU Marketing Applications dashboard"
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
              <p className="leading-tight">
                UX designer, UI designer, project manager, product manager,
                front-end developer
              </p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My responsibilities
              </h2>
              <p className="leading-tight">
                Product design, project/product management, front-end
                development
              </p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My methods
              </h2>
              <p className="leading-tight">
                UX design, UI design, project management, and front-end
                development
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="my-6 md:pl-6">
              <p>
                California Baptist University (CBU) is one of Southern
                California's fastest growing universities. With an enrollment of
                over 10,000 students, and over 1,000 employees, CBU's Marketing
                unit is tasked with providing professional marketing services
                across print, digital, and advertising mediums.
              </p>
              <p className="mt-4">
                CBU Marketing Applications is an internal suite of web apps that
                helps California Baptist University's marketing team manage
                various projects and interface with internal systems. I served
                as both project, design, and team lead on an internally facing
                suite of web applications to support marketing functions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Context</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          High demand, low efficiencies
        </h3>

        <p className="mx-auto md:w-3/4">
          CBU's Marketing unit provides a number of services to university
          departments ranging from managing websites to designing print
          collateral. In order to scale the demand for their services from
          internal departments, they needed a central system that could unite
          various functions and systems to expedite their work. At the time, a
          number of legacy systems were used, but they were very rigid, not user
          friendly, required individual accounts, and required contracting with
          outside vendors whenever maintenance or improvements were needed.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Process</h2>
        <h3 className="text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Uniting different functions in a single place
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          For the design portion of this project, I followed a four-phased
          approach: research, discovert, design, and development.
        </p>
        <h4 className="my-8">Research</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          I conducted user research via group and individual user interviews
          that enabled me to identify the unique needs of these users. Some of
          the questions I asked included:
        </p>
        <ul className="keys list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            How do you use the current systems?
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            How do you complete work?
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            What are the biggest pain points for you with the current systems?
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            What is an ideal feature you’d like to see implemented?
          </li>
        </ul>

        <h4 className="my-8">Discovery</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          What emerged from this research was that we needed an umbrella system
          of apps with various features (e.g. project management, marketing
          content collection, etc.) that function as “apps”. Initial discovery
          for this project focused on the two different types of users: a)
          marketing unit staff who would use the system everyday and b)
          university staff who would use the system to submit project requests
          and marketing content.
        </p>

        <h4 className="my-8">Design</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          I sketched some preliminary wireframes to identify necessary
          functionality and establish the foundation. Then, I moved onto
          designing the UI, choosing to be conservative both in use of color to
          match the CBU brand, and visual hierarchy as it was important to not
          clutter the interface for two reasons: 1) the end user needed to be
          able to use the system with ease; and 2) the marketing staff needed to
          be able to review and process requests quickly. I also worked with our
          visual designers to design icons for the various apps.
        </p>
        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/cbu-marketing-applications-signin.jpg"
            alt="CBU Marketing Applications sign-in"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Marketing Applications &ndash; central sign-in
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/cbu-marketing-applications-dashboard.jpg"
            alt="CBU Marketing Applications dashboard"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Marketing Applications &ndash; dashboard
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/cbu-marketing-applications-project.jpg"
            alt="CBU Marketing Applications Project Request"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Marketing Applications &ndash; Project Request app
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/cbu-marketing-applications-url.jpg"
            alt="CBU Marketing Applications URL checker"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Marketing Applications &ndash; URL Checker app
          </figcaption>
        </figure>

        <h4 className="my-8">Development</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          In my role as front-end developer, I used the Bootstrap framework as a
          base to help build the initial prototype and eventual MVP. This was a
          way to get up and running quickly and allow me to create the
          appropriate placeholders for the backend developer to tie everything
          together. Once my front-end development was done, I worked with the
          backend developer to complete overall development and launch the
          product while also establishing a scaffolding to support future design
          iterations and apps.
        </p>
      </div>
    </section>
    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Outcomes</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Reducing the task-switching
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          While largely a tool for marketing unit staff to manage their daily
          work, the Marketing Applications system proved popular with client
          departments (even spawning a clone of the project request app for the
          Printing department). One of the best outcomes with this project was
          how quickly we could make iterations thanks to the way the system was
          engineered to support multiple apps; all we had to do was spin up a
          test app containing the iteration in question, set permissions, and
          test.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          Uniting disparate systems into a single interface, accessible from any
          device, and the feedback received was that this truly changed how they
          worked and reduced the amount of friction created by having to keep
          multiple windows open, manage different logins, and deal with the
          cognitive load of multiple systems each with different user
          experiences.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Reflection</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Creating a custom solution together yields positive results
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          I was in a unique position to see the results of all the hard work the
          team and I did on this product throughout my time at CBU. The initial
          launch signaled a significant shift in the way CBU Marketing operated
          as uniting separate systems into one platform enabled greater
          efficiencies in both planning, execution, and management of marketing
          tasks.
        </p>
      </div>
    </section>

    <section className="bg-darkNavy dark:bg-accent/40 py-8 w-full">
      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2">
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/arousal-architecture">← Previous Project</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            Arousal Architecture&trade; &mdash; transforming a paper assessment
            to a website
          </h3>
          <Button to="/work/arousal-architecture">Read case study</Button>
        </div>
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/redlands-web-design-class">Next Project →</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            University of Redlands &mdash; teaching a web design class using
            Figma
          </h3>
          <Button to="/work/redlands-web-design-class">Read case study</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default CbuMarketingAppPageCaseStudy;
