const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        status: "OK",
        data: {
            name: "ALLYOSN",
            age: "20"
        }
    });
});


module.exports = router;