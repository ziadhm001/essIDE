const dbFind = async (client) => {
    const cursor = await client.db("essRecord").collection("essVideo").find();
    const result = await cursor.toArray();
    console.log(result);
}
module.exports = dbFind;
