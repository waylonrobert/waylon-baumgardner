/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Testimonial from '../components/Testimonial';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Welcome to Waylon Baumgardner's website" />
    <section className="max-w-7xl p-4 mx-auto md:px-8">
      <h2 className="dark:text-dark-heading-text text-5xl">
        Hi, I'm Waylon 👋🏻
      </h2>

      <p className="text-text text-xl md:text-2xl mt-5 mb-8 dark:text-dark-text">
        {data.site.siteMetadata.description}
      </p>
    </section>
    <section className="mt-8 mb-16 py-8 bg-accent/10 w-full">
      <section className="max-w-7xl p-4 mx-auto md:px-8">
        <h2 className="text-left mt-8 mb-4 text-accent text-4xl dark:text-dark-heading-text md:text-4xl font-defaultSans font-extrabold">
          Selected projects
        </h2>

        <div className="grid grid-cols-1 gap-16 mt-16 md:grid-cols-3">
          <article>
            <Link
              to="/work/matterport-product-page"
              title="Matterport product page case study"
              className="hover:text-red-700"
            >
              <StaticImage
                src="../images/matterport-product-page-case-study-hero.png"
                alt="Screenshot of Matterport product page redesign"
              />
              <h3 className="mt-8">Matterport product page</h3>
              <p className="mt-2 text-text dark:text-white/80">
                Elevating product details to improve the purchase experience.
              </p>
            </Link>
          </article>
          <article>
            <Link
              to="/work/esri-cart-flyout"
              title="Esri cart flyout case study"
              className="hover:text-red-700"
            >
              <StaticImage
                src="../images/esri-cart-flyout-hero-2x.png"
                alt="Screenshot of Esri cart flyout"
              />
              <h3 className="mt-8">Esri cart flyout</h3>
              <p className="mt-2 text-text dark:text-white/80">
                Integrating a familiar e-commerce pattern.
              </p>
            </Link>
          </article>
          <article>
            <Link
              to="/work/cbu-website-redesign"
              title="CBU website redesign Case study"
            >
              <StaticImage
                src="../../images/cbu-website-redesign-hero-2x.jpg"
                alt="Screenshot of CBU Website Redesign"
              />
              <h3 className="mt-8">CBU website</h3>
              <p className="mt-2 text-text dark:text-white/80">
                Redesigning the digital face of a university.
              </p>
            </Link>
          </article>
        </div>
        <div className="my-8 text-center">
          <Button to="/work">See all work</Button>
        </div>
      </section>
    </section>

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
          author="Chloe L'Ecuyer, Product Designer at Alaska Airlines"
        />
        <Testimonial
          quote="Waylon is one of the most compassionate, driven, and intelligent designers I have ever had the pleasure of working with. He thrives when faced with making complex and often difficult design decisions. Waylon leads the UX initiatives for eCommerce here at Esri. As such he designs for a host of buying situations, often with multiple levels of complexity and unique challenges. Additionally and on a more personal level, he is a compassionate listener. Who will give honest and authentic feedback, that is always aimed at making his team members better designers. I have come to him several times and has always provided me with great insights and actionable solutions."
          author="Christian Fazio, Senior UX Designer at Kaiser-Permanante"
        />
        <Testimonial
          quote="I could see the impact Waylon had on the Design Team at Matterport almost instantly. His willingness to jump in, understand context, and execute can't be ignored regardless of the task at hand. Additionally, I always found his attitude and ability to remain calm during times of stress or ambiguity to be incredibly refreshing and motivating. But, most importantly, what sets Waylon apart is the wisdom and kindness he brings to work each day. He's a truly supportive coworker who makes both the work and his coworkers better day in and day out."
          author="Elizabeth Harp, Senior Content Designer at Thumbtack"
        />
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;
