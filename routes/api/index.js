const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (error) {
        res.status(500).json(error);
    }
});




/* const travellersRoutes = require('./travellersRoutes');

const locationsRoutes = require('./locationsRoutes');

const tripsRoutes = require('./tripsRoutes');

router.use('/travellers', travellersRoutes);

router.use('/locations', locationsRoutes);

router.use('/trips', tripsRoutes); */

module.exports = router;