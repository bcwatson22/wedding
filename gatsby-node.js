const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  const result = await graphql(`
    query getAllGuests {
      guestsData {
        guests {
          id
        }
      }
    }
  `);

  result.data.guestsData.guests.forEach((guest) => {

    const { id } = guest;

    console.log(` id is ${id}`);

    createPage({
      path: `rsvp/${id}`,
      component: path.resolve('./src/templates/rsvp.js'),
      context: {
        id: id
      },
    });

  });

}





// const { createFilePath } = require('gatsby-source-filesystem');

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }

// exports.onCreateNode = ({ node, getNode, actions }) => {
//
//   const { createNodeField } = actions;
//
//   if (node.internal.type === 'MarkdownRemark') {
//
//     const slug = createFilePath({ node, getNode, basePath: 'rsvp' });
//
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });
//
//   }
//
// }
//
// query getAllGuests {
//   guestsData {
//     guests {
//       id
//       personal {
//         nicknames
//         greeting
//       }
//       rsvp {
//         responded
//         responses {
//           name
//         }
//       }
//     }
//   }
// }
