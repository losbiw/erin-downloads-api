const router = require('express').Router();
const DBmethods = require('../utils/DBmethods');

router.get('/downloads', async(_req, res) => {
    const allOS = await DBmethods.get();
    res.send(allOS);
});

router.post('/increase', async(req, res) => {
    const { name, location } = req.body;
    
    const userOS = await DBmethods.increase(name, location);
    res.send(userOS);
});

module.exports = router