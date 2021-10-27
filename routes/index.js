const express = require('express');
const router = express.Router();

const redirector = require('./redirector');

router.use('/redirect',redirector);
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;