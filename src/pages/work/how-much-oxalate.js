import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TitleBlock from '../../components/TitleBlock';

const HowMuchOxalateWorkPage = () => (
  <Layout>
    <SEO title="How Much Oxalate Case Study – Work" />
    <div className="m-12 mx-auto w-11/12 md:w-3/4">
      <aside className="text-heading-text dark:text-dark-heading-text text-xs md:text-sm font-worksans font-semibold uppercase">
        Case Study
      </aside>
      <TitleBlock
        pageTitle="How Much Oxalate?"
        shortDescription="How Much Oxalate is a site designed to help the dietary needs of kidney stone sufferers."
        callToAction="View site"
        callToActionTo="https://howmuchoxalate.com"
        callToActionTitle="How Much Oxalate? website"
      />

      <div className="case-study grid grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4">
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My role
          </h2>
          <p className="text-base leading-tight">
            UX/UI designer and front-end developer.
          </p>
        </div>
        <div>
          <h2 className="uppercase font-worksans text-heading-text font-semibold text-xs md:text-sm">
            My methods
          </h2>
          <p className="text-base leading-tight">
            Wireframes, prototypes, visual design, UX writing, copywriting, and
            front-end development.
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto w-11/12 md:w-3/4">
      <div className="case-study-narrative mx-auto my-8 w-11/12 md:w-3/4">
        <h2 className="mb-4 text-3xl md:text-4xl">Overview</h2>

        <p>
          How Much Oxalate is a side project I built to help people like me who
          suffer from calcium oxalate kidney stones. People whose bodies create
          calcium oxalate kidney stones need to carefully monitor their intake
          of oxalates in food and drink. How Much Oxalate is a website that
          provides multiple pathways to help people quickly retrieve oxalate
          content.
        </p>

        <h2 className="my-8 text-3xl md:text-4xl">Problem</h2>

        <p>
          Millions of people deal with calcium oxalate kidney stones and many
          medical professionals recommend increasing the amount of water and
          decreasing the amount of oxalate (a natural substance found in many
          types of foods and drinks) consumed. Harvard University published{' '}
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

        <h2 className="my-8 text-3xl md:text-4xl">Process</h2>
        <p>
          My process was fairly straightforward and broken into the following
          phases:
        </p>
        <ul>
          <li>
            <AnchorLink to="/work/how-much-oxalate#discovery" title="Discovery">
              Discovery
            </AnchorLink>{' '}
            &mdash; identified what to build, who for, and scope
          </li>
          <li>
            <AnchorLink to="/work/how-much-oxalate#design" title="Design">
              Design
            </AnchorLink>{' '}
            &mdash; designed the UX (wireframes and simple prototype), designed
            the UI (high fidelity designs)
          </li>
          <li>
            <AnchorLink to="/work/how-much-oxalate#content" title="Content">
              Content
            </AnchorLink>{' '}
            &mdash; wrote all interface labels (UX writing) and
            informational/help copy (copywriting)
          </li>
          <li>
            <AnchorLink
              to="/work/how-much-oxalate#development"
              title="Development"
            >
              Development
            </AnchorLink>{' '}
            &mdash; built the site from scratch using open-source front-end web
            development tools (no backend needed since I used a static site
            generator that uses flat files)
          </li>
        </ul>

        <h3 id="discovery" className="my-4 text-2xl md:text-3xl">
          Discovery
        </h3>
        <p>
          I knew I wanted to make something that was fast, intuitive, and
          useful. I performed an initial discovery by identifying my audience,
          and researching the frustrations and pains they experienced while
          trying to navigate this health condition through posts from kidney
          stone patients on public social media sites (Reddit, Twitter, and
          Facebook Groups). I then identified three goals for this project:
        </p>
        <ul>
          <li>
            Help calcium oxalate kidney stone sufferers easily find the oxalate
            content in various foods and drinks
          </li>
          <li>Highlight oxalate content in foods based on food groups</li>
          <li>Highlight oxalate content in foods based on a rating system</li>
        </ul>
        <h3 id="design" className="my-4 text-2xl md:text-3xl">
          Design
        </h3>
        <p>
          My next step was to create some basic wireframes to help me identify
          how the experience would work. I had a sense of what it should be
          based on a heuristic evaluation of various medical and diet websites
          and apps that were highly rated by their users. I followed that by
          designing the UI, which included choosing the typography (system fonts
          to preserve load times and allow people to focus on the content) and
          color palettes (shades of blue and teal to evoke trust and calm).
        </p>
      </div>
    </div>
    <div className="w-11/12 md:w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-11/12 md:w-full">
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/how-much-oxalate-mobile-wireframe.jpg"
                alt="How Much Oxalate mobile website wireframe"
                width={200}
              />
              <p className="caption">Homepage wireframe (mobile)</p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/how-much-oxalate-desktop-wireframe.jpg"
                alt="How Much Oxalate desktop website wireframe"
                width={600}
              />
              <p className="caption">Homepage wireframe (desktop)</p>
            </figure>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-11/12 md:w-full">
          <div className="mx-auto">
            <figure>
              <StaticImage
                className="text-center"
                src="../../images/how-much-oxalate-foodgroups-mobile-wireframe.jpg"
                alt="How Much Oxalate food groups mobile website wireframe"
                width={200}
              />
              <p className="caption">Food groups wireframe (mobile)</p>
            </figure>
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/how-much-oxalate-foodgroups-desktop-wireframe.jpg"
                alt="How Much Oxalate desktop food groups website wireframe"
                width={600}
              />
              <p className="caption">Food groups wireframe (desktop)</p>
            </figure>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-11/12 md:w-full">
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/how-much-oxalate-mobile-ui.jpg"
                alt="How Much Oxalate mobile website UI"
                width={200}
              />
              <p className="caption">Home UI (mobile)</p>
            </figure>{' '}
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/how-much-oxalate.jpeg"
                alt="How Much Oxalate desktop website UI"
                width={600}
              />
              <p className="caption">Home UI (desktop)</p>
            </figure>{' '}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-11/12 md:w-full">
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/how-much-oxalate-foodgroups-mobile-ui.jpg"
                alt="How Much Oxalate food groups mobile website UI"
                width={200}
              />
              <p className="caption">Home UI (mobile)</p>
            </figure>{' '}
          </div>
          <div className="mx-auto">
            <figure>
              <StaticImage
                src="../../images/how-much-oxalate-foodgroups-desktop-ui.jpg"
                alt="How Much Oxalate food groups desktop website UI"
                width={600}
              />
              <p className="caption">Home UI (desktop)</p>
            </figure>{' '}
          </div>
        </div>
        <div className="mx-auto w-11/12 md:w-3/4">
          <div className="case-study-narrative mx-auto my-8 mb-16 w-11/12 md:w-3/4">
            <h3 id="content" className="my-4 text-2xl md:text-3xl">
              Content
            </h3>
            <p>
              I wrote all of the UX writing found in the UI elements, and also
              wrote the copy for information and help pages. I used plain
              language and recognizable terms found when discussing food and
              drinks (though I did not rewrite any of Harvard’s data in order to
              preserve the data as-is).
            </p>
            <h3 id="development" className="my-4 text-2xl md:text-3xl">
              Development
            </h3>
            <p>
              Once completed with design and content, I went to work actually
              building the website. Because the Harvard data would not change
              often, I decided to use a static site generator and a flat file
              structure to maximize performance. I ended up taking all of the
              Harvard data and building a JSON data file for all 500+ records to
              make it easier to parse the data programmatically. I chose Gatsby
              to help me build the site, which is a static site generator that
              builds fast sites and leverages React. I also used Tailwind CSS to
              save development time while also using Netlify to simplify hosting
              the site.
            </p>
            <h2 className="my-8 text-3xl md:text-4xl">Reflection</h2>
            <p>
              This was a fun side project for me because it is something that I
              built for myself while at the same time being something that
              others could benefit from. On the next iteration, I’d like to do
              some deeper research into the medical community to see if any
              other analysis or data points exist regarding oxalate content in
              foods to make this as accurate as possible and update the data
              accordingly.
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
                  href="https://howmuchoxalate.com"
                  title="View How Much Oxalate website"
                >
                  View How Much Oxalate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default HowMuchOxalateWorkPage;
