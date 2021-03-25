const router = require('express').Router();

const { Traveller } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;