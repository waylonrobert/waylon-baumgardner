import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';

const CbuWebsiteRedesignPage = () => (
  <Layout>
    <SEO title="CBU Website Redesign Case Study – Work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
      <TitleBlock
        pageCategory="Case Study"
        pageTitle="CBU Website Redesign"
        shortDescription="CBU Website Redesign was a major website redesign project for California Baptist University from 2016."
        callToAction="View site"
        callToActionTo="https://calbaptist.edu"
        callToActionToTitle="CBU website"
      />

      <div className="case-study grid grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs md:text-sm">
            My role
          </h2>
          <p className="text-base leading-tight">
            UX designer, project manager, and front-end developer.
          </p>
        </div>
        <div>
          <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs md:text-sm">
            My methods
          </h2>
          <p className="text-base leading-tight">
            Content strategy, wireframes, prototypes, UX research, UX writing,
            copywriting, project management, and front-end development.
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto w-11/12 md:w-3/4">
      <div className="case-study-narrative mx-auto my-8 w-11/12 md:w-3/4 2xl:w-1/2">
        <h2 className="mb-4 text-3xl md:text-4xl">Overview</h2>

        <p>
          California Baptist University (CBU) is one of Southern California's
          fastest growing university. In 2016, CBU had over 8,000 enrolled
          students and was in the midst of unprecedented growth across the
          university. I led a project team of designers, developers, and
          marketers to redesign and implement a website that would make content
          easier to find for future students and improve page performance
          (particularly important for international recruitment).
        </p>

        <h2 className="my-8 text-3xl md:text-4xl">Problem</h2>

        <p>
          CBU's existing website in 2015-early 2016 was not meeting expectations
          from both business objective and student happiness metrics. Part of
          the problem was a rigid design that made it inflexible for
          increasingly varied marketing content and admissions requirements, and
          some significant user experience issues related to poor navigability.
        </p>

        <h2 className="my-8 text-3xl md:text-4xl">Process</h2>
        <p>
          Due to time and resource constraints, I wore multiple hats on this
          project: UX designer, front-end developer, and project manager. I
          established a process that looked to achieve key milestones and
          clearly define the project schedule:
        </p>
        <div className="mx-auto text-center">
          <figure>
            <StaticImage
              src="../../images/cbu-website-process.jpg"
              alt="Photo of a whiteboard with content for CBU Website process schedule"
              width={600}
            />
            <p className="caption">CBU Website Redesign Project Phases</p>
          </figure>
        </div>
        <ul>
          <li>
            <AnchorLink
              to="/work/cbu-website-redesign#discovery"
              title="Discovery &amp; Infrastructure"
            >
              Discovery &amp; Infrastructure
            </AnchorLink>{' '}
            &mdash; I identified project scope; I performed competitive
            analysis; team conducted stakeholder and user interviews; team
            evaluated and selected technology needs/platform
          </li>
          <li>
            <AnchorLink to="/work/cbu-website-redesign#design" title="Design">
              Design
            </AnchorLink>{' '}
            &mdash; I designed the UX (wireframes and simple prototype), team
            designed the UI (high fidelity designs)
            <ol className="list-disc ml-8">
              <li>
                Testing &mdash; I tested designs with stakeholders from each key
                user group to validate direction
              </li>
            </ol>
          </li>
          <li>
            <AnchorLink
              to="/work/cbu-marketing-applications#development"
              title="Development"
            >
              Development
            </AnchorLink>{' '}
            &mdash; I built the front-end templates; team built the backend and
            tied into technology platform
            <ol className="list-disc ml-8">
              <li>
                Testing &mdash; I tested developed pages with key stakeholder
                groups
              </li>
            </ol>
          </li>
        </ul>

        <h3 id="discovery" className="my-4 text-2xl md:text-3xl">
          Discovery &amp; Infrastructure
        </h3>
        <p>
          The team started from scratch with an extensive discovery phase. In
          this phase, the team conducted multiple user interviews of CBU
          constituents in an effort to understand how CBU’s website was being
          used. I also performed a competitive analysis and did a deep dive of
          other university websites as well as websites from other industries in
          order to identify user patterns and understand how other sites were
          working (or not working). I also performed a content audit to identify
          content to keep and content to delete. Finally, the team evaluated the
          technology platform and selected a new content management system to
          power the new site.
        </p>
        <p>
          Collectively, the team identified the major pain points as follows:
        </p>
        <ul>
          <li>
            Too many audiences &mdash; trying to serve multiple types of users
            and not doing it well
          </li>
          <li>
            Not focused on enrollment &mdash; key university objective was an
            enrollment goal of 10,000 by 2020, and current website was not
            focused on that goal
          </li>
          <li>
            Lack of clarity &mdash; no consistency with content, no clear
            pathways for users, and too much/too little content
          </li>
        </ul>
        <h3 id="design" className="my-4 text-2xl md:text-3xl">
          Design
        </h3>
        <p>
          Discovery produced an exhaustive amount of data to help establish
          where the design direction needed to go. With the three primary pain
          points in mind, I designed wireframes that adopted a task-based
          methodology and focused on content clarity. Once wireframes were done,
          I worked with CBU's art director to transform the wireframes into UI
          designs.
        </p>
        <div className="mx-auto text-center">
          <figure>
            <StaticImage
              src="../../images/cbu-website-ux-wireframes.jpg"
              alt="Photo of a wireframe sketch for CBU website task-based design"
              width={600}
            />
            <p className="caption">
              One of my earlier wireframe sketches for task-based design
            </p>
          </figure>
        </div>
      </div>
    </div>
    <div className="w-11/12 md:w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12 lg:w-1/2">
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/cbu-website-ux-wireframe4.jpg"
                alt="Early wireframe sketch of news and events landing page"
                width={600}
              />
              <p className="caption">
                Early wireframe sketch of news and events landing page
              </p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/cbu-website-ux-wireframe2.jpg"
                alt="Early wireframe sketch of news article template"
                width={600}
              />
              <p className="caption">
                Early wireframe sketch of news article template
              </p>
            </figure>
          </div>
        </div>
        <div className="mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
          <div className="case-study-narrative mx-auto my-8 mb-16 w-11/12 md:w-3/4">
            <div className="mx-auto text-center">
              <figure>
                <StaticImage
                  src="../../images/cbu-website-ux-wireframe3.jpg"
                  alt="Early wireframe sketch of program search feature"
                  width={600}
                />
                <p className="caption">
                  Early wireframe sketch of program search feature
                </p>
              </figure>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto w-11/12 lg:w-1/2">
              <div className="mx-auto">
                <figure>
                  <StaticImage
                    className="text-center"
                    src="../../images/cbu-website-ux-wireframe5.png"
                    alt="Mobile homepage wireframe"
                    width={200}
                  />
                  <p className="caption">Mobile homepage wireframe</p>
                </figure>
              </div>
              <div className="mx-auto">
                <figure>
                  <StaticImage
                    className="text-center"
                    src="../../images/cbu-website-ux-wireframe6.png"
                    alt="Desktop homepage wireframe"
                    width={600}
                  />
                  <p className="caption">Desktop homepage wireframe</p>
                </figure>
              </div>
            </div>
            <div className="mx-auto text-center">
              <figure>
                <StaticImage
                  src="../../images/cbu-site-2016.png"
                  alt="UI design for CBU site"
                  //   width={600}
                />
                <p className="caption">
                  Completed UI design by CBU Art Director
                </p>
              </figure>
            </div>
            <h3 id="development" className="my-4 text-2xl md:text-3xl">
              Development
            </h3>
            <p>
              As part of Discovery &amp; Infrastructure phase, we decided to
              leverage a third-party content management system which required
              development of templates to support the new design. Using HTML,
              CSS, JavaScript, and some XML sprinkled in here and there, I
              developed multiple templates to support the new designs and their
              content needs. I then worked with the backend developer to
              integrate the database and page data into the templates.
            </p>
            <h2 className="my-8 text-3xl md:text-4xl">Reflection</h2>
            <p>
              All of this work was completed by a small team over ten months
              (!!!). It was incredibly ambitious, but resulted in creation of a
              task-based content strategy and design system still in use today.
              It's one of my proudest achievements as a team leader and UX
              designer.
            </p>
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
      </div>
    </div>
  </Layout>
);

export default CbuWebsiteRedesignPage;
