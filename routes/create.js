const express = require('express');
const router = express.Router();

const { mapping } = require('../database/database');

router.post('/', async (req, res) => {
    try{
        console.log( req.body );
        await mapping({
            link :  req.body.link,
            uniqueId : req.body.uniqueId
        }).save();
        res.json({ success: true});
    } catch(e) {
        res.sendStatus(500);
    }
});

module.exports = router;