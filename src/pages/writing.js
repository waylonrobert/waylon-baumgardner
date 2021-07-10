import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';

// const ListLink = (props) => (
//   <li className="text-heading-text text-2xl font-worksans font-semibold my-4">
//     <Link to={props.to} className="underline">
//       {props.children}
//     </Link>
//   </li>
// );
const WritingPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        group(field: frontmatter___year) {
          fieldValue
          totalCount
          nodes {
            slug
            frontmatter {
              year
              title
              intro
              date(formatString: "MMMM D, YYYY")
            }
          }
        }
      }
    }
  `);
  const { group } = data.allMdx;
  const sortedGroups = group.sort((groupA, groupB) =>
    groupA.fieldValue < groupB.fieldValue ? 1 : -1
  );
  return (
    <Layout>
      <SEO
        title="Writing"
        description="Some of my thoughts on design, technology, and life."
      />
      <div className="m-12 mx-auto w-11/12 md:w-3/4 lg:w-3/5">
        <TitleBlock
          pageTitle="Writing"
          shortDescription="Some of my thoughts on design, technology, and life."
        />
        <div className="posts mx-auto w-11/12 md:w-3/4 lg:w-3/5 my-2 md:my-8">
          {sortedGroups.map((posts) => (
            <div key={posts.fieldValue}>
              <h2 className="text-3xl md:text-4xl text-text text-center my-2 md:my-6">
                {posts.fieldValue}
              </h2>
              <ul>
                {posts.nodes.map((node) => (
                  <li
                    className="my-4 md:my-8 list-none"
                    key={node.frontmatter.date}
                  >
                    <span className="text-text dark:text-dark-text text-sm font-worksans font-semibold uppercase">
                      {node.frontmatter.date}
                    </span>

                    {/* this / is needed because Link defaults link tos as relative */}

                    <p className="text-heading-text text-xl md:text-2xl font-worksans font-semibold">
                      <Link to={`/${node.slug}`} className="underline">
                        {node.frontmatter.title}
                      </Link>
                    </p>

                    <p className="font-lora font-normal italic text-text text-sm md:text-lg">
                      {node.frontmatter.intro}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WritingPage;
