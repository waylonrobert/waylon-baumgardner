import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import Button from '../../components/Button';

const CbuWebsiteRedesignPageCaseStudy = () => (
  <Layout>
    <SEO title="CBU Website Redesign Case Study" />
    <section className="mt-8 py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageCategory="Case Study"
          pageTitle="CBU website redesign"
        />
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-4xl mb-8">
          Redesigning the digital face of a university
        </h3>
        <div>
          <StaticImage
            src="../../images/cbu-website-redesign-hero-2x.jpg"
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
              <p className="leading-tight">
                UX designer, project lead, product manager, and front-end
                developer.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My responsibilities
              </h2>
              <p className="leading-tight">
                UX design, project/product management, team lead
              </p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My methods
              </h2>
              <p className="leading-tight">
                Content strategy, UX design, copywriting, project management,
                and front-end development.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="my-6 md:pl-6">
              <p>
                <a
                  href="https://calbaptist.edu"
                  title="California Baptist University"
                >
                  California Baptist University (CBU)
                </a>{' '}
                is one of Southern California's fastest growing universities. In
                2016, CBU had over 8,000 enrolled students and was in the midst
                of unprecedented growth across the university. I led a project
                team of designers, developers, and marketers to redesign and
                implement a website that would make content easier to find for
                future students and improve page performance (particularly
                important for international recruitment).
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
          Making a better future student website experience
        </h3>

        <p className="mx-auto md:w-3/4">
          CBU's existing website in 2015-early 2016 was not meeting expectations
          from both business objective and student happiness metrics. Part of
          the problem was a rigid design that made it inflexible for
          increasingly varied marketing content and admissions requirements, and
          some significant user experience issues related to poor navigability.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          One of the guiding principles for this redesign project was reducing
          overall complexity and surfacing the content new students (and their
          parents) were searching for while making college decisions.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Process</h2>
        <h3 className="text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Limited time and resources, but a worthy challenge
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          Due to time and resource constraints, I wore multiple hats on this
          project: UX designer, front-end developer, project manager, and team
          lead. I established a process that looked to achieve key milestones
          and clearly define the project schedule across planning, design,
          testing, and development phases.
        </p>

        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/cbu-website-process.jpg"
            alt="Photo of a whiteboard with content for CBU Website process schedule"
            className="my-6 border border-accent/20"
            width={600}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            CBU website redesign schedule
          </figcaption>
        </figure>

        <h4 className="my-8">Discovery &amp; Infrastructure</h4>
        <p className="mx-auto md:w-3/4 mt-4">
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
        <p className="mx-auto md:w-3/4 mt-4">
          Collectively, the team identified the major pain points as follows:
        </p>
        <ul className="keys list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Too many audiences &ndash; trying to serve multiple types of users
            and not doing it well
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Not focused on enrollment &ndash; key university objective was an
            enrollment goal of 10,000 by 2020, and current website was not
            focused on that goal
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Lack of clarity &ndash; no consistency with content, no clear
            pathways for users, and too much/too little content
          </li>
        </ul>

        <h4 className="my-8">Design</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          Discovery produced an exhaustive amount of data to help establish
          where the design direction needed to go. With the three primary pain
          points in mind, I designed wireframes that adopted a task-based
          methodology and focused on content clarity. Once wireframes were done,
          I worked with CBU's art director to transform the wireframes into UI
          designs.
        </p>

        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../../images/cbu-website-ux-wireframes.jpg"
            alt="Photo of a wireframe sketch for CBU website task-based design"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Early wireframe sketch for CBU website task-based design
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../../images/cbu-website-ux-wireframe4.jpg"
            alt="Early wireframe sketch of news and events landing page"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Early wireframe sketch of news and events landing page
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../../images/cbu-website-ux-wireframe2.jpg"
            alt="Early wireframe sketch of news article template"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Early wireframe sketch of news article template
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../../images/cbu-website-ux-wireframe3.jpg"
            alt="Early wireframe sketch of program search feature"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Early wireframe sketch of program search feature
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../../images/cbu-website-ux-wireframe5.png"
            alt="Mobile homepage wireframe"
            className="my-6 border border-accent/20"
            width={500}
            // height={800}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Mobile homepage wireframe
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../../images/cbu-website-ux-wireframe6.png"
            alt="Desktop homepage wireframe"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Desktop homepage wireframe
          </figcaption>
        </figure>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {' '}
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/cbu-website-redesign-homepage-ui-mobile-2x.jpg"
              alt="Mobile homepage UI design for CBU site"
              className="my-6 border border-accent/20"
              width={200}
              // height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Mobile homepage UI design by CBU Art Director based on my
              wireframes
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/cbu-website-redesign-homepage-ui.jpg"
              alt="Desktop homepage UI design for CBU site"
              className="my-6 border border-accent/20"
              width={800}
              // height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Desktop homepage UI design by CBU Art Director based on my
              wireframes
            </figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/cbu-website-redesign-program-ui-mobile.jpg"
              alt="Mobile program page UI design for CBU site"
              className="my-6 border border-accent/20"
              width={200}
              // height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Mobile program page UI design by CBU Art Director based on my
              wireframes
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/cbu-website-redesign-program-ui.jpg"
              alt="Desktop program page UI design for CBU site"
              className="my-6 border border-accent/20"
              width={800}
              // height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Desktop program page UI design by CBU Art Director based on my
              wireframes
            </figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/cbu-website-redesign-news_events-ui-mobile.jpg"
              alt="Mobile program page UI design for CBU site"
              className="my-6 border border-accent/20"
              width={200}
              // height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Mobile news &amp; events page UI design by CBU Art Director based
              on my wireframes
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/cbu-website-redesign-news_events-ui.jpg"
              alt="Desktop program page UI design for CBU site"
              className="my-6 border border-accent/20"
              width={800}
              // height={800}
            />
            <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Desktop news &amp; events page UI design by CBU Art Director based
              on my wireframes
            </figcaption>
          </figure>
        </div>

        <h4 className="my-8">Development</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          As part of Discovery &amp; Infrastructure phase, we decided to
          leverage a third-party content management system which required
          development of templates to support the new design. Using HTML, CSS,
          JavaScript, and some XML sprinkled in here and there, I developed
          multiple templates to support the new designs and their content needs.
          I then worked with the backend developer to integrate the database and
          page data into the templates.
        </p>
      </div>
    </section>
    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Outcomes</h2>
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Practicing user-centered design and strengthening cross-functional
          collab
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
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
        <p className="mx-auto md:w-3/4 mt-4">
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
            <Link to="/work/esri-cart-flyout">← Previous Project</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            Esri &mdash; integrating a familiar e-commerce pattern
          </h3>
          <Button to="/work/esri-cart-flyout">Read case study</Button>
        </div>
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/arousal-architecture">Next Project →</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            CBU Marketing Applications platform &mdash; a suite of web apps to
            support achieving marketing objectives.
          </h3>
          <Button to="/work/cbu-marketing-applications">Read case study</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default CbuWebsiteRedesignPageCaseStudy;
