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

         // shortid.generate()

         // Construct a document
         let guestsDocument = [
           {
             "shortId": "9yLbQgnkE",
             "personal": {
               "nicknames": "Arch and Mya",
               "greeting": "Buzzing that you're one of my groomsmen Archibald!",
             },
             "contact": {
               "address": "21 Didsbury Road, Stockport, SK4 2BD",
               "email": "archiegray@live.co.uk"
             },
             "response": {
               "responded": false
             },
             "responses": [
               {
                 "name": "Archie"
               },
               {
                 "name": "Mya"
               }
             ]
           },
           {
             "shortId": "FdnRvyCAFp",
             "personal": {
               "nicknames": "Uncle Tay",
               "greeting": "Unfortunately, we won't be serving any home brand lager so you might have to drink something tastier!",
             },
             "contact": {
               "address": "17 Lily Road, London, E17 8HY",
               "email": "jacktaylor1988@hotmail.co.uk"
             },
             "response": {
               "responded": false
             },
             "responses": [
               {
                 "name": "Jack"
               }
             ]
           },
           {
             "shortId": "zUIDbD5x6M",
             "personal": {
               "nicknames": "Auntie Festa",
               "greeting": "There will be plenty of opportunities for beer sniping young man!",
             },
             "contact": {
               "address": "177 Sharrow Vale Road, Sheffield, S11 8ZB",
               "email": "jamie.chapman11189@gmail.com"
             },
             "response": {
               "responded": true,
               "date": "2020-04-20"
             },
             "responses": [
               {
                 "name": "Jamie",
                 "attending": true,
                 "comments": "Can't wait guys",
                 "dietary": "I'll eat anything"
               }
             ]
           },
           {
             "shortId": "1GNpq5bcLH",
             "personal": {
               "nicknames": "Tys and Sarah"
             },
             "contact": {
               "address": "26 Hardman Street, Failsworth, M35 0BB",
               "email": "jaketysome@gmail.com"
             },
             "response": {
               "responded": false
             },
             "responses": [
               {
                 "name": "Jake"
               },
               {
                 "name": "Sarah"
               }
             ]
           }
         ]

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(guestsDocument);
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
