const dbCreate = async (client, newRecord) => {
    const result = await client.db("essRecord").collection("essVideo").insertOne(newRecord);
    console.log(`New record added, ID: ${result.insertedId}`);
}

module.exports = dbCreate;