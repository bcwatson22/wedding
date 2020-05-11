const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  if (stage === 'build-html') {

    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null()
          }
        ]
      }
    })

  }

}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  const result = await graphql(`
    query getAllGuests {
      wedding {
        guests {
          id
        }
      }
    }
  `);

  result.data.wedding.guests.forEach((guest) => {

    const { id } = guest;

    createPage({
      path: `rsvp/${id}`,
      component: path.resolve('./src/templates/respond.js'),
      context: {
        guestId: id
      },
    });

  });

}
