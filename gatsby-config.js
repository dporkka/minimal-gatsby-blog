module.exports = {
  siteMetadata: {
    title: "David Porkka",
    description: "This is where I share things with the internet",
    author: "David Porkka",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: "GTM-52QP48X",
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
              // Defers execution of google analytics script after page load
              defer: false,
              // Any additional optional fields
              sampleRate: 5,
              siteSpeedSampleRate: 10,
              cookieDomain: "www.davidporkka.com",
            },
          },
        ],
      },
    },

  ],
}
