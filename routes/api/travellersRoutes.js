const router = require('express').Router();

const { Traveller } = require('../../models');


// It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia Core.
router.get("/", async (req, res) => {
    try {
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (error) {
        res.status(500).json(error);
    }
});


// It's done when the POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia Core.
router.post("/", async (req, res) => {
    try {
        const createTraveller = await Traveller.create(req.body);
        res.status(200).json(createTraveller);
    } catch (err) {
        res.status(400).json(err);
    }
});


// It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia Core. 
router.get ("/:id", async (req, res) => {
    try {
        const specificTraveller = await Traveller.findByPk(req.params.id);
        res.status(200).json(specificTraveller);
    } catch (err) {
        res.status(400).json(err);
    }
});


// It's done when the DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia Core.
router.delete("/:id", async (req, res) => {
    try {
        const travellerData = await Traveller.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(400).json(err)
    }
});



module.exports = router;