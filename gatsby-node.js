const path = require('path');

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
