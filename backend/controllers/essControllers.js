const { MongoClient } = require("mongodb");
const Record = require('../models/recordModel')
const State = require('../models/stateModel')
const dbCreate = require('../db/dbCreate');


const createRecord = async (req,res) => {
    const {action , lines ,start ,timestamp} = req.body;
    try {
        const record = await Record.create({action, lines, start, timestamp});
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createState = async (req,res) => {
    const {codeStart} = req.body;
    try {
        const state = await State.create({codeStart});
        res.status(200).json(state);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const login = async (req, res) =>{
    const client = new MongoClient(process.env.ATLAS_URI);
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
}


const play = async (req, res) =>{
    const client = new MongoClient(process.env.ATLAS_URI);
    const cursor = await client.db("essRecords").collection("states").find();
    const result = await cursor.toArray();
    res.send(result);
}

const playData = async (req, res) =>{
    const client = new MongoClient(process.env.ATLAS_URI);
    const cursor = await client.db("essRecords").collection("records").find();
    const result = await cursor.toArray();
    res.send(result);
}

const record = async (req, res) =>{
    const client = new MongoClient(process.env.ATLAS_URI);
    const body = req.body;
    dbCreate(client,body);
    res.send("OK");
}

module.exports = {
    login,
    play,
    createRecord,
    createState,
    playData
}   