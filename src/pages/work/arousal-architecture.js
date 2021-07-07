import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';

const ArousalArchitecturePage = () => (
  <Layout>
    <SEO title="Arousal Architecture™️ Assessment Case Study – Work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4">
      <aside className="text-heading-text dark:text-dark-heading-text text-xs md:text-sm font-worksans font-semibold uppercase">
        Case Study
      </aside>
      <TitleBlock
        pageTitle="Arousal Architecture™️ Assessment"
        shortDescription="Arousal Architecture™️ Assessment is a website that helps Kayna Cassard counsel her clients."
        callToAction="View site"
        callToActionTo="https://arousalarchitecture.com"
        callToActionTitle="Arousal Architecture™️ Assessment website"
      />

      <div className="case-study grid grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My role
          </h2>
          <p className="text-base leading-tight">
            UX/UI designer, front-end developer.
          </p>
        </div>
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My methods
          </h2>
          <p className="text-base leading-tight">
            Wireframes, prototypes, visual design, UX writing, and front-end
            development (HTML/CSS/JS).
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto w-11/12 md:w-3/4">
      <div className="case-study-narrative mx-auto my-8 w-11/12 md:w-3/4">
        <h2 className="mb-4 text-3xl md:text-4xl">Overview</h2>

        <p>
          Arousal Architecture™️ Assessment is the brainchild of{' '}
          <a href="https://www.kaynacassard.com/" title="Kayna Cassard">
            Kayna Cassard
          </a>
          , a licensed Marriage and Family Therapist, Sex Therapist, Pelvic Pain
          Relief Expert and Sexuality Specialist and proprietor of Intuitive
          Sensuality, a sexual health and wellness practice. The digital Arousal
          Architecture™️ Assessment website aids Cassard in helping her clients
          engage in fulfilling relationships with themselves and their partners.
        </p>

        <h2 className="my-8 text-3xl md:text-4xl">Problem</h2>

        <p>
          <a href="https://www.kaynacassard.com/" title="Kayna Cassard">
            Kayna Cassard
          </a>
          , a licensed Marriage and Family Therapist, Sex Therapist, Pelvic Pain
          Relief Expert and Sexuality Specialist, approached me about building
          an online version of her Arousal Architecture™️ Assessment. The
          assessment is one of many tools she uses to help her clients learn how
          to liberate their sensuality, connect more deeply with themselves and
          their partners, and ignite passion in all areas of their lives. At the
          time, the assessment was an analog process where her clients completed
          the assessment on paper, and Cassard manually calculated the
          assessment results. Cassard wanted a digital version of the assessment
          that served three purposes: 1) save time for her clients and herself;
          2) empower her clients to complete the assessment ahead of sessions
          and on <em>their</em> schedule; and 3) eliminate manually creating
          assessment results.
        </p>

        <h2 className="my-8 text-3xl md:text-4xl">Process</h2>
        <p>For this project, I followed a three-phased approach:</p>
        <ul>
          <li>
            <AnchorLink
              to="/work/arousal-architecture#discovery"
              title="Discovery"
            >
              Discovery
            </AnchorLink>{' '}
            &mdash; identified project scope and what to build
          </li>
          <li>
            <AnchorLink to="/work/arousal-architecture#design" title="Design">
              Design
            </AnchorLink>{' '}
            &mdash; designed the UX (wireframes and simple prototype), designed
            the UI (high fidelity designs)
          </li>
          <li>
            <AnchorLink
              to="/work/arousal-architecture#development"
              title="Development"
            >
              Development
            </AnchorLink>{' '}
            &mdash; built the site from scratch using open-source front-end web
            development tools (no backend needed since, for privacy reasons, no
            data is stored)
          </li>
        </ul>

        <h3 id="discovery" className="my-4 text-2xl md:text-3xl">
          Discovery
        </h3>
        <p>
          It was important to me that I understood how Cassard used the
          assessment to ensure that the completed project was useful. After
          several interviews with Cassard, I gained greater understanding in how
          she used the assessment and from there I was able to establish a scope
          of work. Then, I surveyed the landscape and performed a competitive
          analysis. From there I identified three goals for the project based on
          Cassard’s own goals from above:
        </p>
        <ul>
          <li>
            Design an easy-to-use assessment that avoids user fatigue due to the
            quantity of questions asked (50)
          </li>
          <li>
            Ensure assessment clients have access to their results
            post-completion (via a chart for quick summarization)
          </li>
          <li>Further promote Cassard’s brand</li>
        </ul>
        <h3 id="design" className="my-4 text-2xl md:text-3xl">
          Design
        </h3>
        <p>
          My next step was to create wireframes to help me identify how the
          experience might function. The assessment includes 50 questions, and
          because of the complexity of these questions, one of my top priorities
          was ensuring that the design embraced simplicity to ensure the best
          user experience and reduce user fatigue. Once I reviewed the
          wireframes with Cassard, I moved to designing the UI. This included
          aligning color and fonts to Cassard’s existing brand while also using
          color and contrast to establish a sense of place during the question
          and answer portion of the assessment.
        </p>
      </div>
    </div>
    <div className="w-11/12 md:w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 mx-auto w-11/12">
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/arousal-architecture-start-desktop-wireframe.jpg"
                alt="Arousal Architecture homepage wireframe"
                width={600}
              />
              <p className="caption">
                Arousal Architecture™️ homepage wireframe
              </p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/arousal-architecture-question-desktop-wireframe.jpg"
                alt="Arousal Architecture question page wireframe"
                width={600}
              />
              <p className="caption">
                Arousal Architecture™️ question page wireframe
              </p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/arousal-architecture-results-desktop-wireframe.jpg"
                alt="Arousal Architecture results page wireframe"
                width={600}
              />
              <p className="caption">
                Arousal Architecture™️ results page wireframe
              </p>
            </figure>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 mx-auto w-11/12">
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/arousal-architecture-start-desktop-ui.jpg"
                alt="Arousal Architecture homepage UI"
                width={600}
              />
              <p className="caption">Arousal Architecture™️ homepage UI</p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/arousal-architecture-question-desktop-ui.jpg"
                alt="Arousal Architecture question page UI"
                width={600}
              />
              <p className="caption">Arousal Architecture™️ question page UI</p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/arousal-architecture-results-desktop-ui.jpg"
                alt="Arousal Architecture results page UI"
                width={600}
              />
              <p className="caption">Arousal Architecture™️ results page UI</p>
            </figure>
          </div>
        </div>

        <div className="mx-auto w-11/12 md:w-3/4">
          <div className="case-study-narrative mx-auto my-8 mb-16 w-11/12 md:w-3/4">
            <h3 id="development" className="my-4 text-2xl md:text-3xl">
              Development
            </h3>
            <p>
              Once designs were finalized and approved by Cassard, I went to
              work actually building the website. Since there was limited need
              for dynamic content, and no need for any kind of database backend
              or results storage for user privacy, I decided to use a static
              site generator with a flat file structure to maximize performance.
              I converted the questions into a parsable data file, then went ton
              work leveraging third-party open source libraries for the survey
              component interaction and results chart generation, with some
              extra bits sprinkled in for marketing automation that tied into
              Cassard's existing MarTech stack.
            </p>
            <h2 className="my-8 text-3xl md:text-4xl">Reflection</h2>
            <p>
              This was an amazing project because it allowed me to not only
              learn about a completely different world than I’m used to, but
              also challenged me at all phases of this project. The design phase
              required that I practice patience and really focus on the simple
              mechanics of questionnaires/survey in order to maximize user
              happiness. Similarly, the development phase challenged me in new
              ways because I had never built something this complex before. In
              future iterations, I’d love to do some testing to gauge how users
              feel when taking the assessment as well as identify areas to
              improve user happiness.
            </p>
          </div>
          <div className="next-steps mx-auto my-8 mb-16 w-11/12 md:w-3/4">
            <ul className="list-none text-heading-text dark:text-dark-heading-text text-base md:text-xl font-worksans font-semibold">
              <li className="md:inline-block">
                <Link
                  className="next-steps-left"
                  to="/work"
                  title="Back to my work"
                >
                  Back to my work
                </Link>
              </li>
              <li className="mt-4 md:mt-0 md:inline-block md:ml-16">
                <a
                  href="https://arousalarchitecture.com"
                  title="View Arousal Architecture™️ Assessment website"
                >
                  View Arousal Architecture™️ Assessment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ArousalArchitecturePage;
