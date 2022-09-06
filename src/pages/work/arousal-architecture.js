import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import Button from '../../components/Button';

const ArousalArchitecturePageCaseStudy = () => (
  <Layout>
    <SEO title="Arousal Architecture™️ Assessment Case Study" />
    <section className="mt-8 py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageCategory="Case Study"
          pageTitle="Arousal Architecture™️ assessment"
        />
        <h3 className="summary-statement text-text dark:text-white/80 dark:text-white/80 font-medium font-sourceSerifPro text-4xl mb-8">
          Transforming a paper assessment to an online experience
        </h3>
        <div>
          <StaticImage
            src="../../images/arousal-architecture-hero-2x-min.jpg"
            alt="Arousal Architecture Assessment design screenshot"
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
                Freelance product designer, front-end developer
              </p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My responsibilities
              </h2>
              <p className="leading-tight">
                Product design, front-end development
              </p>
            </div>
            <div className="mb-6">
              <h2 className="uppercase font-defaultSans text-accent font-semibold text-xs mb-2 md:text-sm">
                My methods
              </h2>
              <p className="leading-tight">
                UX design, UI design, UX writing, front-end development
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="my-6 md:pl-6">
              <p>
                Arousal Architecture™️ Assessment is the brainchild of Kayna
                Cassard, a licensed Marriage and Family Therapist, Sex
                Therapist, Pelvic Pain Relief Expert and Sexuality Specialist
                and proprietor of Intuitive Sensuality, a sexual health and
                wellness practice. The digital Arousal Architecture™️ Assessment
                website aids Cassard in helping her clients engage in fulfilling
                relationships with themselves and their partners.
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
          Closing the gap between analog and digital
        </h3>

        <p className="mx-auto md:w-3/4">
          Kayna Cassard, a licensed Marriage and Family Therapist, Sex
          Therapist, Pelvic Pain Relief Expert and Sexuality Specialist,
          approached me about building an online version of her Arousal
          Architecture™ Assessment. The assessment is one of many tools she uses
          to help her clients learn how to liberate their sensuality, connect
          more deeply with themselves and their partners, and ignite passion in
          all areas of their lives.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          At the time, the assessment was an analog process where her clients
          completed the assessment on paper, and Cassard manually calculated the
          assessment results. Cassard wanted a digital version of the assessment
          that served multiple purposes:
        </p>

        <ul className="keys list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Preserve client session time for therapy
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Empower her clients to complete the assessment ahead of sessions, on
            their own time, and from within the privacy of their home
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Eliminate manually creating assessment results, saving time for
            client session prep
          </li>
        </ul>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Process</h2>
        <h3 className="text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Making an engaging online assessment
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          For this project, I followed a three-phased approach consisting of
          discovery, design, and development phases.
        </p>

        <h4 className="my-8">Discovery</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          It was important to me that I understood how Cassard used the
          assessment to ensure that the completed project was useful. After
          several interviews with Cassard, I gained greater understanding in how
          she used the assessment and from there I was able to establish a scope
          of work. Then, I surveyed the landscape and performed a competitive
          analysis.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          From there I identified three goals for the project based on Cassard’s
          own goals from above:
        </p>
        <ul className="keys list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Design an easy-to-use assessment that avoids user fatigue due to the
            quantity of questions asked (50)
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Ensure assessment clients have access to their results
            post-completion (via a chart for quick summarization)
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Further promote Cassard’s brand and practice
          </li>
        </ul>

        <h4 className="my-8">Design</h4>
        <p className="mx-auto md:w-3/4 mt-4">
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

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/arousal-architecture-start-desktop-wireframe.jpg"
            alt="Arousal Architecture Assessment homepage wireframe"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Homepage wireframe
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/arousal-architecture-question-desktop-wireframe.jpg"
            alt="Arousal Architecture Assessment question page wireframe"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Question page wireframe
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/arousal-architecture-results-desktop-wireframe.jpg"
            alt="Arousal Architecture results page wireframe"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Results page wireframe
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/arousal-architecture-start-desktop-ui.jpg"
            alt="Arousal Architecture homepage UI"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Homepage UI
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/arousal-architecture-question-desktop-ui.jpg"
            alt="Arousal Architecture Assessment question page UI"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Question page UI
          </figcaption>
        </figure>

        <figure className="mx-auto my-8 w-auto md:w-3/4 text-center">
          <StaticImage
            src="../../images/arousal-architecture-results-desktop-ui.jpg"
            alt="Arousal Architecture Assessment results page UI"
            className="my-6 border border-accent/20"
            width={800}
            // height={800}
          />
          <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
            Results page UI
          </figcaption>
        </figure>

        <h4 className="my-8">Development</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          Once designs were finalized and approved by Cassard, I went to work
          building the website. Since there was limited need for dynamic
          content, and no need for any kind of database backend or storage (for
          user privacy), I decided to use a static site generator with a flat
          file structure to maximize performance.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          I converted the questions into a parsable data file, then went to work
          leveraging third-party open source libraries for the survey component
          interaction and results chart generation, with some extra bits
          sprinkled in for marketing automation that tied back into Cassard's
          existing MarTech stack.
        </p>
      </div>
    </section>
    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Outcomes</h2>
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Achieving client happiness
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          Cassard was thrilled with the final result of this project, and has
          since shared this has been an excellent addition to her toolchest in
          her practice. The ability for Cassard's clients to complete this
          survey on their own time and in private has fostered greater honesty
          and communication during sessions.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Reflection</h2>
        <h3 className="summary-statement text-text dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          The more I learn the more I don't know
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          This was an amazing project because it allowed me to not only learn
          about a completely different world than I’m used to, but also
          challenged me at all phases of this project. The design phase required
          that I practice patience and really focus on the simple mechanics of
          questionnaires/surveys in order to maximize user happiness. Similarly,
          the development phase challenged me in new ways because I had never
          built something this complex before. In future iterations, I’d love to
          do some testing to gauge how users feel when taking the assessment as
          well as identify areas to improve user happiness.
        </p>
      </div>
    </section>

    <section className="bg-darkNavy dark:bg-accent/40 py-8 w-full">
      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2">
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/cbu-website-redesign">Next Project →</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            CBU &mdash; redesigning the digital face of a university
          </h3>
          <Button to="/work/cbu-website-redesign">Read case study</Button>
        </div>
        <div className="max-w-7xl p-4 mx-auto md:px-8">
          <aside className="date text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/arousal-architecture">Next Project →</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            How Much Oxalate &mdash; finding oxalate content of known food and
            drink at ease
          </h3>
          <Button to="/work/how-much-oxalate">Read case study</Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ArousalArchitecturePageCaseStudy;
