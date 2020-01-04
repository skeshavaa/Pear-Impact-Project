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
    {
      resolve: 'gatsby-plugin-alias-imports', 
      options: {
        alias: {
          '@components': path.resolve(__dirname, './src/components/exports'),
          '@templateStyles': path.resolve(__dirname, './src/styles/templateStyles'),
          '@pageStyles': path.resolve(__dirname, './src/styles/pageStyles'),
          '@compStyles': path.resolve(__dirname, './src/styles/componentStyles')
        }
      }
    }
  ]
}
