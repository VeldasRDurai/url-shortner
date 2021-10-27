const express = require('express');
const router = express.Router();

const { mapping } = require('../database/database');

router.get('/:uniqueId',async (req, res) => {
    try{
        const data = await mapping.findOne({ uniqueId : req.params.uniqueId });
        data ? res.redirect( data.link ) : res.sendStatus(404);
    } catch(e) {
        res.sendStatus(500);
    }
});

module.exports = router;