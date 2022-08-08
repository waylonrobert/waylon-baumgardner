/* eslint-disable react/destructuring-assignment */
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function FeaturedProject(props) {
  return (
    <section className={props.bgcolor}>
      <div className="grid grid-cols-1 gap-4 w-full mx-8 py-8 font-defaultSans md:grid-cols-2">
        <div className="text-center">
          <StaticImage
            src="../../images/cbu-website-redesign-thumb.jpg"
            alt="Screenshot of CBU Website Redesign"
          />
        </div>
        <div>
          <h3 className="text-white pt-12">{props.title}</h3>
          <p className="mt-8 text-white text-left font-sourceSerifPro">
            {props.description}
          </p>

          <Link to={props.link}>
            <button
              type="button"
              className="cta bg-white dark:bg-dark-heading-text text-text dark:text-black py-4 px-6 mt-6 text-base font-defaultSans"
            >
              {props.cta}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
