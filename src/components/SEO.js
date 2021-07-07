import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, meta = [] }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          twitter
        }
      }
    }
  `);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: 'en' }}
      titleTemplate={`%s — ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `twitter:creater`,
          content: site.siteMetadata.twitter || ``,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
