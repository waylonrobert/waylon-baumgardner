import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
        <TitleBlock
          pageTitle="About me"
          shortDescription="About pages are always the hardest, right?"
        />

        <div className="mx-auto w-11/12 md:w-3/4 my-8">
          <div className="float-left pr-4">
            <StaticImage
              src="../images/waylon-baumgardner-portrait.jpg"
              alt="Waylon Baumgardner"
              width={250}
            />
          </div>
          <p className="mb-4">
            Hi, my name is Waylon Baumgardner, and I'm a product designer, front-end
            developer who knows enough to be dangerous, design educator, <a href="https://adplist.org/mentors/waylon-baumgardner" title="My ADPList mentor profile">mentor</a>, and <em>amateur</em>{' '}
            violinist (<em>very</em> amateur) from and based out of Southern
            California. I grew up in San Diego, and now reside somewhere in
            between San Diego and LA.
          </p>
          <p>
            I started my professional career as a web developer/designer. I
            spent ten years in higher education where I held various web
            development/design/leadership roles. I then shifted the focus of my
            career entirely, pursuing my love of UX and UI design by joining Esri as a
            Senior UX Designer. I now work on Matterport's design team in a senior product designer role focused on transactional web experiences.{' '}
          </p>
          <h2 className="mt-14 mb-8">What I Believe</h2>
          <p>
            I've documented some truths I personally believe in that shape and
            influence how I work:
          </p>
          <ul className="mt-4 dark:text-dark-text">
            <li>
              Practice <em>empathy</em>; we're <em>all</em> dealing with{' '}
              <em>something</em>
            </li>
            <li>
              Good ideas can <em>(and do)</em> come from anyone and anywhere
            </li>
            <li>
              Context, <em>not</em> content, is “king”
            </li>
            <li>
              UX and UI design require <em>different</em> but complimentary
              skills
            </li>
            <li>
              Users <em>sometimes</em> need guidance
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4 my-8">
          <div>
            <h2 className="uppercase font-worksans text-darkPurple font-semibold text-xs md:text-sm">
              My interests
            </h2>
            <ul className="about-interests py-1 md:py-4 dark:text-dark-text">
              <li>Writing</li>
              <li>
                <Link to="/reading-log">Reading</Link>
              </li>
              <li>
                <Link to="/music-log">Music</Link>
              </li>
              <li>Web design/dev</li>
              <li>Graphic design/typography</li>
              <li>Obscure 90's TV</li>
              <li>Coffee</li>
              <li>Bourbon whiskey</li>
              <li>Cars</li>
              <li>Console video games</li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase font-worksans text-darkPurple font-semibold text-xs md:text-sm text-left">
              My knowledge areas
            </h2>

            <ul className="about-interests py-1 md:py-4 dark:text-dark-text">
              <li>Higher education</li>
              <li>Leadership</li>
              <li>Nonprofits</li>
              <li>Systems thinking</li>
              <li>User-centered design</li>
              <li>Computers &amp; technology</li>
              <li>Web development</li>
              <li>Writing</li>
            </ul>
          </div>
        </div>
        <h2 className="my-8 mx-auto w-11/12 md:w-3/4">
          What People Say About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-16 mx-auto w-3/4 md:w-11/12">
        <div>
          <blockquote>
            I really appreciated Waylon's help in creating my Arousal
            Architecture assessment - from total scratch! I wasn't sure on what
            I wanted but I explained to him my vision and from that he was able
            to create a great tool that my clients use in our psychotherapy
            work, and it's an awesome lead generator for my business too! He was
            communicative and responsive to my needs and changes I wanted to
            implement along the way. Thanks Waylon for bringing my life's work
            to life!
          </blockquote>
          <p className="text-sm mt-2 text-darkPurple dark:text-dark-heading-text font-worksans font-medium">
            <em>
              &mdash;Kayna Cassard MS, LFMT, Owner at Intuitive Sensuality
            </em>
          </p>
        </div>
        <div>
          <blockquote>
            Waylon is one of the brightest, most diligent and creative web
            professionals I have had the pleasure of managing. His matches
            strong web and CMS development skills and problem-solving abilities
            with a burning desire for continuous learning and new challenges.
            Waylon also demonstrates an exceptional commitment to customer
            service and always goes above and beyond to deliver solutions that
            delight his clients and makes users' lives better.
          </blockquote>
          <p className="text-sm mt-2 text-darkPurple dark:text-dark-heading-text font-worksans font-medium">
            <em>&mdash;Sean Dillingham, Product Design Manager at Honey</em>
          </p>
        </div>
        <div>
          <blockquote>
            Waylon is very methodical in his approach when working with web
            design and applications. He understands UI and UX from the users and
            content administrators. He knows when to provide more information to
            help end clients understand the process, so they feel comfortable
            and confident. He is up to date with current industry standards.
            Overall he just a great person to work with because he makes the
            process easy.
          </blockquote>
          <p className="text-sm mt-2 text-darkPurple dark:text-dark-heading-text font-worksans font-medium">
            <em>
              &mdash;Keith Castillo, Sr. Instructional Designer at Charter
              College
            </em>
          </p>
        </div>
        <div>
          <blockquote>
          I had such an information-packed 30-minute interview prep session with Waylon. He is so articulate and understands exactly what I was curious to know or concerned about. He deciphers the intentions behind the most frequently asked questions and gave so many helpful tips on how to tie my interests with the company's goals while being authentically me.
          </blockquote>
          <p className="text-sm mt-2 text-darkPurple dark:text-dark-heading-text font-worksans font-medium">
            <em>&mdash;Gaeun Karen Lee, UX designer and ADPList Mentee</em>
          </p>
        </div>
      </div>
    </Layout>
  );
}
