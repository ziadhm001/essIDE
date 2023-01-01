const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = async () => {

    const client = new MongoClient(process.env.ATLAS_URI)
    try {
        await client.connect();
    } catch(err) {
        console.error(err);
    }

};

const dbList = async (client) => {
    const databaseList = await client.db().admin().listDatabases();
    console.log("Database list:");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

const createRecordSample = async (client, newRecord) => {
    const result = await client.db("essRecord").collection("essVideo").insertOne(newRecord);
    console.log(`New record added, ID: ${result.insertedId}`);
}

const createRecord = async (client, newRecord) => {
    const result = await client.db("essRecord").collection("essVideo").insertMany(newRecord);
    console.log(`${result.insertedCount} new events created with the following id(s): `);
    console.log(result.insertedIds);
}
module.exports = dbConnect;
