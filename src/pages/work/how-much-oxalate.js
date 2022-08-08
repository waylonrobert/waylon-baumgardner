import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';
import Button from '../../components/Button';

const HowMuchOxalatePageCaseStudy = () => (
  <Layout>
    <SEO title="How Much Oxalate Case Study" />
    <section className="mt-8 py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageCategory="Case Study / Personal"
          pageTitle="How Much Oxalate?"
        />
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-4xl mb-8">
          Finding oxalate content of known food and drink at ease
        </h3>
        <div>
          <StaticImage
            src="../../images/how-much-oxalate-hero-2x-min.jpg"
            alt="How Much Oxalate? screenshot"
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
                <a
                  href="https://howmuchoxalate.com"
                  title="How Much Oxalate website"
                >
                  How Much Oxalate
                </a>{' '}
                is a side project I built to help people like me who suffer from
                calcium oxalate kidney stones. People whose bodies create
                calcium oxalate kidney stones need to carefully monitor their
                intake of oxalates in food and drink. How Much Oxalate is a
                website that provides multiple pathways to help people quickly
                retrieve oxalate content.
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
          Decreasing oxalate to help prevent forming calcium oxalate kidney
          stones
        </h3>

        <p className="mx-auto md:w-3/4">
          Millions of people deal with calcium oxalate kidney stones and many
          medical professionals recommend increasing the amount of water and
          decreasing the amount of oxalate (a natural substance found in many
          types of foods and drinks) consumed.
        </p>
        <p className="mx-auto mt-4 md:w-3/4">
          Harvard University published{' '}
          <a
            href="https://regepi.bwh.harvard.edu/health/nutrition.html"
            title="Harvard University's publicly available oxalate data"
          >
            lab analysis results
          </a>{' '}
          of oxalate content in over 500 different kinds of food and drink. The
          results are provided in a series of Excel and text files that are
          difficult to parse, require significant effort to sort through,
          especially if the patient is at a restaurant or evaluating a recipe
          and want to find the level of oxalates in a given meal’s ingredients
          quickly.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Process</h2>
        <h3 className="text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Creating something more useful than a spreadsheet
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          For this project, I followed a four-phased approach consisting of
          discovery, design, content, and development phases.
        </p>

        <h4 className="my-8">Discovery</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          I knew I wanted to make something that was fast, intuitive, and
          useful. I performed an initial discovery by identifying my audience,
          and researching the frustrations and pains they experienced while
          trying to navigate this health condition through posts from kidney
          stone patients on public social media sites (Reddit, Twitter, and
          Facebook Groups).
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          I then identified three goals for this project:
        </p>
        <ul className="keys list-none mx-auto mt-4 md:w-3/4 dark:text-white">
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Help calcium oxalate kidney stone sufferers easily find the oxalate
            content in various foods and drinks
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Highlight oxalate content in foods based on food groups
          </li>
          <li className="my-2 md:pl-8 before:content-['→'] before:mr-2 before:text-accent before:text-2xl before:align-middle dark:before:text-dark-heading-text">
            Highlight oxalate content in foods based on a rating system
          </li>
        </ul>

        <h4 className="my-8">Design</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          My next step was to create some basic wireframes to help me identify
          how the experience would work. I had a sense of what it should be
          based on a heuristic evaluation of various medical and diet websites
          and apps that were highly rated by their users. I followed that by
          designing the UI, which included choosing the typography (system fonts
          to preserve load times and allow people to focus on the content) and
          color palettes (shades of blue and teal to evoke trust and calm).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-mobile-wireframe.jpg"
              alt="How Much Oxalate mobile website wireframe"
              className="my-6 border border-accent/20"
              width={200}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Mobile website wireframe
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-desktop-wireframe.jpg"
              alt="How Much Oxalate desktop website wireframe"
              className="my-6 border border-accent/20"
              // width={800}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Desktop website wireframe
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-foodgroups-mobile-wireframe.jpg"
              alt="How Much Oxalate food groups mobile website wireframe"
              className="my-6 border border-accent/20"
              width={200}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Mobile food groups wireframe
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-foodgroups-desktop-wireframe.jpg"
              alt="How Much Oxalate desktop food groups website wireframe"
              className="my-6 border border-accent/20"
              // width={800}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Desktop food groups wireframe
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-mobile-ui.jpg"
              alt="How Much Oxalate mobile website UI"
              className="my-6 border border-accent/20"
              width={200}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Mobile homepage UI
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-homepage-ui-2x.jpg"
              alt="How Much Oxalate desktop website UI"
              className="my-6 border border-accent/20"
              // width={800}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Desktop homepage UI
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-foodgroups-ui-mobile-2x.jpg"
              alt="How Much Oxalate food groups mobile website UI"
              className="my-6 border border-accent/20"
              width={200}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Mobile food groups UI
            </figcaption>
          </figure>
          <figure className="mx-auto my-8 text-center">
            <StaticImage
              src="../../images/how-much-oxalate-food-groups-ui-2x.jpg"
              alt="How Much Oxalate food groups desktop website UI"
              className="my-6 border border-accent/20"
              // width={800}
              // height={800}
            />
            <figcaption className="-mt-2 text-base text-accent dark:text-dark-heading-text italic font-defaultSans font-medium">
              Desktop food groups UI
            </figcaption>
          </figure>
        </div>
        <h4 className="my-8">Content</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          I wrote all of the UX writing found in the UI elements, and also wrote
          the copy for information and help pages. I used plain language and
          recognizable terms found when discussing food and drinks (though I did
          not rewrite any of Harvard’s data in order to preserve the data
          as-is).
        </p>
        <h4 className="my-8">Development</h4>
        <p className="mx-auto md:w-3/4 mt-4">
          Once completed with design and content, I went to work actually
          building the website. Because the Harvard data would not change often,
          I decided to use a static site generator and a flat file structure to
          maximize performance.
        </p>
        <p className="mx-auto md:w-3/4 mt-4">
          I ended up taking all of the Harvard data and building a JSON data
          file for all 500+ records to make it easier to parse the data
          programmatically. I chose Gatsby to help me build the site, which is a
          static site generator that builds fast sites and leverages React. I
          also used Tailwind CSS to save development time while also using
          Netlify to simplify hosting the site.
        </p>
      </div>
    </section>
    <section className="py-10 bg-white dark:bg-dark-bg w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Outcomes</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Achieving client happiness
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          To generate interest in this site, I shared it with people I've come
          across in my life who suffer from calcium oxalate kidney stones. I'm
          also a member of numerous online forums and social media groups where
          I've shared the link as a resource to the community. I've gotten some
          personal messages in response thanking me for building this site, and
          for me there is no better outcome than a happy user.
        </p>
      </div>
    </section>
    <section className="py-10 bg-accent/10 w-full">
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-4 dark:text-dark-heading-text">Reflection</h2>
        <h3 className="summary-statement text-gray-500 dark:text-white/80 font-medium font-sourceSerifPro text-3xl mb-9">
          Side projects teach me a little about a lot
        </h3>
        <p className="mx-auto md:w-3/4 mt-4">
          This was a fun side project for me because it is something that I
          built for myself while at the same time being something that others
          could benefit from. On the next iteration, I’d like to do some deeper
          research into the medical community to see if any other analysis or
          data points exist regarding oxalate content in foods to make this as
          accurate as possible and update the data accordingly.
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
          {/* <aside className="text-dark-heading-text dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
            <Link to="/work/redlands-web-design-class">Next Project →</Link>
          </aside>
          <h3 className="summary-statement dark:text-white text-white font-medium font-sourceSerifPro text-3xl ">
            University of Redlands &mdash; teaching a web design class using
            Figma
          </h3>
          <Button to="/work/redlands-web-design-class">Read case study</Button> */}
        </div>
      </div>
    </section>
  </Layout>
);

export default HowMuchOxalatePageCaseStudy;
