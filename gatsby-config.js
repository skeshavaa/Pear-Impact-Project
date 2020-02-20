/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env`
});

const BlogQuery = `
query {
  allContentfulBlogPost (
    sort: {
      fields:publishedDate,
      order:DESC
    }
  ){
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMM Do, YYYY")
      }
    }
  }
}
`

const queries = [
  {
    query: BlogQuery,
    transformer: ({ data }) => data.allContentfulBlogPost.edges.node

  }
];

const path = require('path')


module.exports = {
  siteMetadata: {
    title: 'Migrant Moments',
    author: 'Keshavaa Shaiskandan'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://gmail.us4.list-manage.com/subscribe/post?u=030ab60dbad39723445796fc2&amp;id=5f68f3a93f"
      }
    },
    `gatsby-transformer-csv`,
    {
      resolve: 'gatsby-plugin-alias-imports', 
      options: {
        alias: {
          '@components': path.resolve(__dirname, './src/components/exports'),
          '@templateStyles': path.resolve(__dirname, './src/styles/templateStyles'),
          '@pageStyles': path.resolve(__dirname, './src/styles/pageStyles'),
          '@compStyles': path.resolve(__dirname, './src/styles/componentStyles'),
          '@images': path.resolve(__dirname, './src/images')
        }
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-156343051-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      }
    }
  ]
}
