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

         // Insert a single document, wait for promise so we can read it back
         const p = await col.drop();
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
