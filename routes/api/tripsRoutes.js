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


// It's done when the POST route `/api/trips` creates trip data between associated travellers and locations.
router.post("/", async (req,res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
    } catch (error) {
        res.status(500).json(error);
    }
});


// It's done when the DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia Core.
router.delete("/:id", async (req, res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(tripData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;