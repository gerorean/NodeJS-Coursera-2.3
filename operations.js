//2.3.2 -2.3.3
//Modules
const assert = require('assert');
//Exports insert
exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    //Insert promise
    return coll.insert(document);
};
//Exports find
exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    //Find promise
    return coll.find({}).toArray();
};
//Exports remove
exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    //Delete promise
    return coll.deleteOne(document);
};
//Exports update
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    //UPdate promise
    return coll.updateOne(document, { $set: update }, null);
};