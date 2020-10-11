//2.3.1 -2.3.2 -2.3.3
//Modules
const MongoClient = require('mongodb').MongoClient;
/*const assert = require('assert');*/
const dboper = require('./operations');
//Constants
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
//Object
MongoClient.connect(url).then((client) => {
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    //Insert
    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
        "dishes")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);
            //Find
            return dboper.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);
            //Update
            return dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes");
        })
        .then((result) => {
            //Find
            console.log("Updated Document:\n", result.result);
            return dboper.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);     
            //Drop
            return db.dropCollection("dishes");
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);
            //Close
            return client.close();
        })
        //Error catch
        .catch((err) => console.log(err));
 })
 .catch((err) => console.log(err)); 