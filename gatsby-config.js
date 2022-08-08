require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Waylon Baumgardner | Designer, leader, educator',
    description: `A designer, leader, and educator based in Southern California.`,
    twitter: 'waylonrobert',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-remark-images`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/reading`,
        name: `books`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        ignore: process.env.NODE_ENV === `production` && [`**/pages/archives`], // any file in this directory gets ignored on build
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        // on local make sure .env file is present, otherwise this breaks
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,

        fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/avatar.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        // on local make sure .env file is present, otherwise this breaks
        domain: process.env.PLAUSIBLE_DOMAIN,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'America/Los_Angeles',
        format: 'MMMM D, YYYY',
      },
    },
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: `https://www.goodreads.com/review/list_rss/109392577?key=esQePyzjTK7vRGBpRjFXUnCVe0wHNIqTwDVNllHdm9TN_oQt&shelf=currently-reading`,
    //     name: `Goodreads`,
    //   },
    // },
  ],
};
