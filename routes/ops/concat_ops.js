const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.json({concat_string : `${req.body.str1}-${req.body.str2.toUpperCase()}`});
});

module.exports = router;