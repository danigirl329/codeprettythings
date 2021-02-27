module.exports = {
  siteMetadata: {
    title: `CodePrettyThings`,
    description: `A sassy frontend developer who loves code, coffee, and puggles.`,
    author: `@danigirl329`,
    pathPrefix: "/codeprettythings",
    assetPrefix: `https://danigirl329.github.io/codeprettythings`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Montserrat\:300,400`,
            `Bubblegum Sans`
          ],
          display: 'swap'
        },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `http://codeprettythings`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
