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

router.post("/", async (req, res) => {
    try {
        const createTraveller = await Traveller.create(req.body);
        res.status(200).json(createTraveller);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get ("/:id", async (req, res) => {
    try {
        const specificTraveller = await Traveller.findByPk(req.params.id);
        res.status(200).json(specificTraveller);
    } catch (err) {
        res.status(400).json(err);
    }
});

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
})
module.exports = router;