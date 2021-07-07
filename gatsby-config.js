require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Waylon Baumgardner',
    description: `I'm Waylon Baumgardner, a senior user experience designer based in Southern California.`,
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
      resolve: `gatsby-source-spotify`,
      options: {
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
        domain: process.env.PLAUSIBLE_DOMAIN,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
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
