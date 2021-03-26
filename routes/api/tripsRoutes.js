const { Trip } = require('../../models');

const router = require('express').Router();


router.get("/", async (req, res) => {
    try {
        const tripData = await Trip.findAll();
        res.status(200).json(tripData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;