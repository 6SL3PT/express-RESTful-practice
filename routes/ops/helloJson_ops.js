const express = require('express');
const router = express.Router();
const helloJson = require('../../data/HelloJson');

router.get('/', (req, res) => {
    res.json(helloJson);
});

module.exports = router;