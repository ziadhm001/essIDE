const express = require('express');
const router = express.Router();
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:3000"
};

const {
    play,
    createRecord,
    createState,
    playData
} = require('../controllers/essControllers')
const requireAuth = require('../middleware/requireAuth');


router.use(requireAuth);

router.post('/play',cors(corsOptions), play)
router.post('/playData',cors(corsOptions), playData)
router.post('/record',cors(corsOptions), createRecord)
router.post('/recordState',cors(corsOptions), createState)

module.exports = router;
