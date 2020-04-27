module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'BBAPI',
        fieldName: 'guestsData',
        url: 'https://wedding-server-e0acff40a9.herokuapp.com/wedding-service/prod',
      }
    }
  ],
}
