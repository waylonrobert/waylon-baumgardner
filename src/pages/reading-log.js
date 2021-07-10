import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';
// import SmallSeparator from '../components/smallSeparator';

// const ListLink = (props) => (
//   <li className="text-heading-text text-2xl font-worksans font-semibold my-4">
//     <Link to={props.to} className="underline">
//       {props.children}
//     </Link>
//   </li>
// );
const ReadingLogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/reading/" } }
        sort: { fields: frontmatter___dateFinished, order: DESC }
      ) {
        group(field: frontmatter___yearRead) {
          fieldValue
          totalCount
          nodes {
            frontmatter {
              dateFinished(formatString: "MMMM D, YYYY")
              yearRead
              title
              author
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
      <SEO title="Reading log" />
      <div className="m-12 mx-auto w-11/12 md:w-3/4 lg:w-3/5">
        <TitleBlock
          pageTitle="Reading log"
          shortDescription="Below is a log of books I've read, organized by year."
        />
        <div className="mx-auto w-11/12 md:w-3/4 lg:w-3/5 my-4 md:my-8">
          {sortedGroups.map((books) => (
            <div className="mb-8">
              <h2
                className="text-4xl text-text dark:text-dark-text my-4"
                key={books.fieldValue}
              >
                {books.fieldValue}
              </h2>

              <p className="text-base mb-4">
                I read{' '}
                <strong className="text-heading-text dark:text-dark-heading-text">
                  {books.totalCount}
                </strong>{' '}
                {books.totalCount > 1 ? 'books' : 'book'} in {books.fieldValue}:
              </p>

              {books.nodes.map((node) => (
                <div className="mb-6">
                  <p className="text-heading-text dark:text-dark-heading-text text-xl md:text-2xl font-worksans font-semibold">
                    {node.frontmatter.title}
                  </p>

                  <p className="font-lora font-normal italic text-text dark:text-dark-text text-base md:text-lg">
                    {node.frontmatter.author}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ReadingLogPage;
