var craigslist = require('node-craigslist'),
  client = new craigslist.Client({
    city : 'sfbay'
  });

export const posts = () => (
  client.list()
);

// client
//   .list()
//   .then((listings) => {
//     // play with listings here...
//     listings.forEach((listing) => console.log(listing));
//   })
//   .catch((err) => {
//     console.error(err);
//   });
