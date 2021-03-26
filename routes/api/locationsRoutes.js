const { Location } = require('../../models');

const router = require('express').Router();


// It's done when the GET route `/api/locations` returns all location data in Insomnia Core.
router.get("/", async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (error) {
        res.status(500).json(error);
    }
});


// It's done when the GET route `/api/locations/:id` returns a single location's data, with its associated trips, in Insomnia Core. 
router.get("/:id", async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id);
        res.status(200).json(locationData);
    } catch (error) {
        res.status(500).json(error);
    }
});


// It's done when the POST route `/api/locations` creates location data and returns a successful response in Insomnia Core.
router.post("/", async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData);
    } catch (error) {
        res.status(500).json(error);
    }
});


// It's done when the DELETE route `/api/locations/:id` removes a location and any trips associated with it and returns a successful response in Insomnia Core.
router.delete("/:id", async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(locationData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;