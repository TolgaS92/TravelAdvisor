const { Trips } = require('../../models');

const router = require('express').Router();


router.get("/", async (req, res) => {
    try {
        const tripsData = await Trips.findAll();
        res.status(200).json(tripsData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;