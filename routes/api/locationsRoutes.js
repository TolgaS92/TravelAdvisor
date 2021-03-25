const { Location } = require('../../models');

const router = require('express').Router();


router.get("/", async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;