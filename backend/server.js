const express = require('express');
const { MongoClient } = require("mongodb");
const dbCreate = require('./db/dbCreate')
const dbConnect = require('./db/dbConnect');
const dbFind = require('./db/dbFind');
const cors = require('cors');
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());

dbConnect();
const client = new MongoClient(process.env.ATLAS_URI);
const corsOptions = {
    origin: "http://localhost:3000"
};

app.post('/login',cors(corsOptions), async (req, res) =>{
    const result = await client.db("essRecord").collection("users").findOne({userName: req.body.userName});
    if(result)
    {
        if(req.body.password === result.password)
            res.send("OK");
        else
            res.send("WRONG_PASSWORD");
    }
    else
        res.send("WRONG_USER");
})

app.post('/play',cors(corsOptions), async (req, res) =>{
    const body = req.body;
    const cursor = await client.db("essRecord").collection("essVideo").find();
    const result = await cursor.toArray();
    res.send(result);
})

app.post('/record',cors(corsOptions), async (req, res) =>{
    const body = req.body;
    dbCreate(client,body);
    res.send("OK");
})
// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
