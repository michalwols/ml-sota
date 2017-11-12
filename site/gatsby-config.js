module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  pathPrefix: 'ml-sota',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `../data/`,
    },
  }
  ],
}
