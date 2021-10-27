const express = require('express');
const router = express.Router();

const { mapping } = require('../database/database');

router.post('/', async (req, res) => {
    try{
        console.log( req.body );
        const condition = req.body.type === 'LINK' ? 
            { link : req.body.value } : 
            { uniqueId : req.body.value }; 
        const content = await mapping.findOne( condition );
        res.json({ content });
    } catch(e) {
        res.sendStatus(500);
    }
});

module.exports = router;