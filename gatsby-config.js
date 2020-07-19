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
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-mailchimp",
    //   options: {
    //     endpoint: 'https://davidporkka.us10.list-manage.com/subscribe/post?u=4bb66f41564333a77bccbdb14&amp;id=cedb78cf57',
    //   },
    // },
  ],
}
