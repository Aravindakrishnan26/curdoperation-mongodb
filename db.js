//const mongodb = require('mongodb');
//const MongoClient = mongodb.MongoClient;
//const ObjectId = mongodb.ObjectId;

const mongoose = require('mongoose');



let database;

async function getdatabase() {
    //const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    //database = client.db('library');

    //if (!database) {
    // console.log('database not connected');
    //}
    //return database;
    mongoose.connect('mongodb://127.0.0.1:27017/library').then(() => {
        console.log('connected')
    }).catch(() => {
        console.log('failed')
    })
}

module.exports = {
    getdatabase,
    //ObjectId
}