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
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="mb-8 text-center">What people have to say about me</h2>
      </div>
      <section className="px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-16 mx-auto">
          <Testimonial
            quote="Waylon rocks! I had the pleasure to work with him for a year or so at Matterport. He’s one of the kindest and friendliest people I’ve ever worked with. He’s got an exceptional work ethic and thoughtful approach to solving design and experience problems. He’s a great communicator with great technical chops — making him a wonderful collaborator with cross-functional partners."
            author="Dave Lippman, Chief Design Officer at Matterport"
          />
          <Testimonial
            quote="Waylon is an overall wonderful colleague and friend to work with. He is always honest with his feedback in a way that is helpful and methodical. When collaborating with other designers, he takes time to understand people's ideas and is always ready to make thoughtful recommendations of his own. We have worked on quite a few projects together throughout our time at Esri- from designing marketplace listing pages to designing a team site. Whenever I am stuck on a project, I know that I can ask Waylon for help and he is always willing to listen and ideate, even if the project has nothing to do with his day to day work. In short, Waylon's work is clean, organized, and meaningful- while also being accompanied by a great sense of humor."
            author="Chloe L'Ecuyer, UX Designer at HP"
          />
          <Testimonial
            quote="Waylon is one of the most compassionate, driven, and intelligent designers I have ever had the pleasure of working with. He thrives when faced with making complex and often difficult design decisions. Waylon leads the UX initiatives for eCommerce here at Esri. As such he designs for a host of buying situations, often with multiple levels of complexity and unique challenges. Additionally and on a more personal level, he is a compassionate listener. Who will give honest and authentic feedback, that is always aimed at making his team members better designers. I have come to him several times and has always provided me with great insights and actionable solutions."
            author="Christian Fazio, Senior UX Designer at Kaiser-Permanante"
          />
          <Testimonial
            quote="Waylon is a huge asset to any team, as someone who keeps true to traditional UX design principles, especially E-Commerce, while pushing the envelope to improve and challenge current user experiences. He is quick to listen to others, respond empathetically and articulate his decisions thoroughly to others who are of similar or different backgrounds. He takes the time to get to know who the users and stakeholders are with unwavering objectivity often reflected in his work. "
            author="Jeanette Kao, Product Designer at Alaska Airlines"
          />
        </div>
      </section>
    </Layout>
  );
}
