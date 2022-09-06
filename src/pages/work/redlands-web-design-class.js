import * as React from 'react';
import { getSrc, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import Button from '../../components/Button';

const RedlandsWebDesignClassCaseStudy = () => (
  <Layout>
    <SEO title="University of Redlands Web Design Class Case Study" />
    <section className="mt-8 py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageCategory="Case Study"
          pageTitle="University of Redlands Web Design Class"
        />
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-4xl mb-8">
          Teaching web design to a new generation of students using Figma
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
              <p className="leading-tight">Instructional design</p>
            </div>

            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My methods
              </h2>
              <p className="leading-tight">Pedagogy, UX design, UI design</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="my-6 md:pl-6">
              <p>
                In the spring of 2022 I designed and taught a university web
                design course completely within Figma. Figma served as the
                repository for all lecture slides, in-class exercises, and
                graded assignments. I designed the course to cover a broad
                spectrum of modern web design topics not solely focused on code
                (which so many “web design” courses at the university level
                focus on). Topics I taught in this class included UX design, UI
                design, visual hierarchy, information architecture, design
                careers, front-end development, and of course Figma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Context</h2>

        <p className="mx-auto md:w-3/4">
          In 2019, I was approached about teaching a web design class at a local
          university as a colleague who had taught it for many years was taking
          a break. I was free to redesign the course curriculum and develop it
          in a way I saw fit with one caveat: whatever I developed needed to
          function as an in-person studio class. After meeting with the
          department chair and understanding their goals for the course, I went
          to work.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">
          Teaching components
        </h2>

        <p className="mx-auto md:w-3/4 mt-4">
          The first step of designing the course curriculum was to research
          existing and adjacent courses at the university in order to build the
          course syllabus. From there I casted a wider net to see what other
          universities were teaching when it came to this topic, while also
          soliciting feedback on social media and talking to colleagues asking
          such questions as “what do you wish you would have learned about
          design?” or “what did you wish you would have known before starting a
          web design career?”.
        </p>

        <p className="mx-auto md:w-3/4 mt-4">
          I also researched some pedagogy when it comes to teaching web design,
          and most of what I found was focused on teaching web development.
        </p>

        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-main-title-slide-min.png"
            alt="Title slide screenshot"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Title slide component
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-assignment-file-thumb-min.png"
            alt="Homework assignment Figma thumbnail component"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Homework assignment Figma thumbnail component
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-inclass-exercise-file-thumb-min.png"
            alt="In-class design exercise Figma thumbnail component"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            In-class design exercise Figma thumbnail component
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-designproject-file-thumb-min.png"
            alt="Project major assignment Figma thumbnail component"
            className="my-6 border border-accent/20"
            //   width={950}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Project major assignment Figma thumbnail component
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 text-center">
          <StaticImage
            src="../../images/redlands-course-schedule-min.png"
            alt="Course schedule snapshot"
            className="my-6 border border-accent/20"
            width={1920}
          />
          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Course schedule snapshot
          </figcaption>
        </figure>
        <h3 className="my-8">Random sampling of slides</h3>

        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-example-title-slide-min.png"
            alt="Real title slide screenshot"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Title slide component with content
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
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
          <Link to="/work/esri-cart-flyout">Next Project →</Link>
        </aside>
        <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
          Esri &mdash; integrating a familiar e-commerce pattern
        </h3>
        <Button to="/work/esri-cart-flyout">Read case study</Button>
      </div>
    </section>
  </Layout>
);

export default RedlandsWebDesignClassCaseStudy;
