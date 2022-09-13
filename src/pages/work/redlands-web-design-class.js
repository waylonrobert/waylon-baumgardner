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
            src="../images/redlands-web-design-min.jpg"
            alt="University of Redlands web design class Figma workspace"
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

        <p className="mx-auto mt-8 md:w-3/4">
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

        <p className="mx-auto md:w-3/4 mt-8">
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
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-intro-to-figma-slide-min.png"
            alt="Intro to Figma slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Intro to Figma slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-methods-slide-min.png"
            alt="Iterate and user definitions slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Iterate and user definitions slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-visual-hierarchy-slide-min.png"
            alt="Visual hierarchy design slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Visual hierarchy design slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-mobile-first-slide-min.png"
            alt="Mobile-first design slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Mobile-first design slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-rwd-slide-min.png"
            alt="Responsive web design slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Responsive web design slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-breakpoints-slide-min.png"
            alt="Breakpoints design slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Breakpoints design slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-inclusive-design-slide-min.png"
            alt="Inclusive design slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Inclusive design slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-user-flows-slide-min.png"
            alt="User flows slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            User flows slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-gestalt-slide-min.png"
            alt="Gestalt principles slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Gestalt principles slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-viewing-patterns-slide-min.png"
            alt="Viewing patterns slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Viewing patterns slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-focal-slide-min.png"
            alt="Focal points slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Focal points slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-time-on-internet-slide-min.png"
            alt="Time-on-internet slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Time-on-internet slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-design-ethics-slide-min.png"
            alt="Design ethics slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Design ethics slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-uxr-methods-slide-min.png"
            alt="UX research methods slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            UX research methods slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-rgba-slide-min.png"
            alt="RGBA color code slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            RGBA color code slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-html-slide-min.png"
            alt="HTML code slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            HTML code slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-designs-sytems-slide-min.png"
            alt="Design systems slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Design systems slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-components-slide-min.png"
            alt="Design systems components slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Design systems components slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-presentations-slide-min.png"
            alt="Presentation mechanics slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Presentation mechanics slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-ia-slide-min.png"
            alt="Information architecture types slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Information architecture types slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-type-scale-slide-min.png"
            alt="Typescale slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Typescale slide
          </figcaption>
        </figure>
        <figure className="mx-auto my-8 md:w-3/4 text-center">
          <StaticImage
            src="../../images/redlands-dev-handoff-slide-min.png"
            alt="Developer handoff slide"
            className="my-6 border border-accent/20"
            //   width={950}
          />

          <figcaption className="text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Developer handoff slide
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Outcomes</h2>

        <p className="mx-auto md:w-3/4 mt-8">
          During the course I regularly sought feedback direct from students,
          and formalized a mid-term evaluation assessment to gauge whether the
          structure was working. I then asked them again during the last week of
          class, and got some interesting responses. Some students reacted well
          to the structure, others communicated that they wanted to see the
          lectures broken down into smaller chunks for better processing. This
          was welcome feedback to get so I could make adjustments if asked to
          teach this class again.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Reflection</h2>

        <p className="mx-auto md:w-3/4 mt-8">
          One of the most challenging aspects of designing for this class was
          not knowing how students would react to the structure and course
          topics. Thankfully majority of students responded well, but I also
          took note of things to improve upon should I teach this class again
          including finding more ways to create engagement opportunities,
          reducing some of the lectures into smaller, more manageable chunks,
          and creating more space for me to help share what my thinking was when
          presented with design challenges.
        </p>
      </div>
    </section>

    <section className="bg-darkNavy dark:bg-accent/40 py-8 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
          <Link to="/work/esri-cart-flyout">Next Project →</Link>
        </aside>
        <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
          Matterport &mdash; elevating product details to improve the purchase
          experience
        </h3>
        <Button to="/work/matterport-product-page">Read case study</Button>
      </div>
    </section>
  </Layout>
);

export default RedlandsWebDesignClassCaseStudy;
