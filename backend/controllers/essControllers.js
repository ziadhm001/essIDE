const { MongoClient } = require("mongodb");
const Record = require('../models/recordModel')
const State = require('../models/stateModel')

const getNames = async (req,res) => {
    const states = await State.find({},{_id:0,name:1})
    res.status(200).json(states)
}

const createRecord = async (req,res) => {
    const {action , lines ,start ,timestamp, name} = req.body;
    try {
        const record = await Record.create({action, lines, start, timestamp, name});
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createState = async (req,res) => {
    const {codeStart, name} = req.body;
    try {
        const state = await State.create({codeStart, name});
        res.status(200).json(state);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}




const play = async (req, res) =>{
    const client = new MongoClient(process.env.ATLAS_URI);
    const cursor = await client.db("ess").collection("states").find();
    const result = await cursor.toArray();
    res.send(result);
}

const playData = async (req, res) =>{
    const client = new MongoClient(process.env.ATLAS_URI);
    const cursor = await client.db("ess").collection("records").find();
    const result = await cursor.toArray();
    res.send(result);
}


module.exports = {
    play,
    createRecord,
    createState,
    playData,
    getNames
}   