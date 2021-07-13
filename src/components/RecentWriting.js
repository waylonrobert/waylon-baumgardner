/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export default function RecentWriting() {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 2
        filter: { fileAbsolutePath: { regex: "/writing/" } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            intro
          }
          slug
        }
      }
    }
  `);
  return (
    <div>
      {data.allMdx.nodes.map((posts) => (
        <div className="mt-6 md:mt-6" key={posts.frontmatter.title}>
          <span>
            <aside className="text-text dark:text-dark-text text-sm font-worksans font-semibold uppercase">
              {posts.frontmatter.date}
            </aside>
            <p>
              <Link to={`/${posts.slug}`} className="underline">
                {posts.frontmatter.title}
              </Link>
            </p>
            <p className="font-lora font-normal italic text-text text-sm md:text-lg">
              {posts.frontmatter.intro}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
}
