import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import TitleBlock from '../components/TitleBlock';
import SEO from '../components/SEO';

const BlogPostPage = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article>
        <div className="m-12 mx-auto w-11/12 md:w-3/4 2xl:w-1/2">
          <TitleBlock
            postDate={post.frontmatter.date}
            pageTitle={post.frontmatter.title}
            shortDescriptionAlt={post.frontmatter.intro}
          />
          <div className="article mx-auto w-11/12 md:w-3/4">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostId($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        intro
        date(formatString: "MMMM Do, YYYY")
      }
      body
      slug
    }
  }
`;
export default BlogPostPage;
