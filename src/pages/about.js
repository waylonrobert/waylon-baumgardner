import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Testimonial from '../components/Testimonial';
import TitleBlock from '../components/TitleBlock';

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageTitle="About me"
          shortDescription="About pages are always the hardest, right?"
        />

        <div className="mx-auto w-auto md:w-3/4 my-8 md:mb-16">
          <div className="float-left pr-4">
            <StaticImage
              src="../images/waylon-baumgardner-portrait.jpg"
              alt="Waylon Baumgardner"
              width={200}
            />
          </div>
          <div className="mb-8">
            <p className="mb-4">
              Hi, my name is Waylon Baumgardner, and I'm a product designer,
              front-end developer who knows enough to be dangerous, design
              educator,{' '}
              <a
                href="https://adplist.org/mentors/waylon-baumgardner"
                title="My ADPList mentor profile"
              >
                mentor
              </a>
              , and <em>amateur</em> violinist (<em>very</em> amateur) from and
              based out of Southern California. I grew up in San Diego, and now
              reside somewhere in between San Diego and LA.
            </p>
            <p>
              I started my professional career as a web developer/designer. I
              spent ten years in higher education where I held various web
              development/design/leadership roles. I then shifted the focus of
              my career entirely to full-time product design roles.{' '}
            </p>
          </div>
        </div>
        <div className="mx-auto w-auto md:w-3/4 my-8 md:mt-16">
          <div className="mt-12">
            <h2 className="mt-14 mb-8 text-center">What I believe</h2>
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-11/12 md:w-3/4 my-8">
          <div>
            <h2 className="uppercase font-defaultSans text-text font-semibold text-xs md:text-sm">
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
            <h2 className="uppercase font-defaultSans text-text font-semibold text-xs md:text-sm text-left">
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
      </div>
    </Layout>
  );
}
