const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://bcwatson22:triviuma7x@cluster0-zk5nb.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';

const client = new MongoClient(url);

const shortid = require('shortid');

 // The database to use
 const dbName = 'wedding';

 async function run() {
    try {
         await client.connect();
         console.log('Connected correctly to server');
         const db = client.db(dbName);

         // Use the collection 'people'
         const col = db.collection('guests');

         // Construct a document
         let guestsDocument = [
           {
             "_id": shortid.generate(),
             "guests": {
               "nicknames": "Arch and Mya",
               "greeting": "Buzzing that you're one of my groomsmen Archibald!",
               "full": [
                 {
                   "name": "Archie",
                   "responded": true,
                   "rsvp": {
                     "date": "2020-05-03",
                     "attending": true,
                     "dietary": null
                   }
                 },
                 {
                   "name": "Mya",
                   "responded": true,
                   "rsvp": {
                     "date": "2020-05-03",
                     "attending": true,
                     "dietary": "Allergic to shellfish"
                   }
                 }
               ]
             }
           },
           {
             "_id": shortid.generate(),
             "guests": {
               "nicknames": "Tys and Sarah",
               "greeting": null,
               "full": [
                 {
                   "name": "Jake",
                   "responded": true,
                   "rsvp": {
                     "date": "2020-06-11",
                     "attending": true,
                     "dietary": null
                   }
                 },
                 {
                   "name": "Sarah",
                   "responded": true,
                   "rsvp": {
                     "date": "2020-06-11",
                     "attending": false,
                     "dietary": null
                   }
                 }
               ]
             }
           },
           {
             "_id": shortid.generate(),
             "guests": {
               "nicknames": "Uncle Tay",
               "greeting": "Unfortunately, we won't be serving any home brand lager so you might have to drink something tastier!",
               "full": [
                 {
                   "name": "Jack",
                   "responded": false,
                   "rsvp": null
                 }
               ]
             }
           },
           {
             "_id": shortid.generate(),
             "guests": {
               "nicknames": "Auntie Festa",
               "greeting": "There will be plenty of opportunities for beer sniping young man!",
               "full": [
                 {
                   "name": "Jamie",
                   "responded": true,
                   "rsvp": {
                     "date": "2020-04-10",
                     "attending": true,
                     "dietary": null
                   }
                 }
               ]
             }
           }
         ]

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(guest);
         // Find one document
         const myDoc = await col.find({});
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }

     finally {
        await client.close();
    }
}

run().catch(console.dir);
