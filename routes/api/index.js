const router = require('express').Router();

const travellersRoutes = require('./travellersRoutes');

const locationsRoutes = require('./locationsRoutes');

const tripsRoutes = require('./tripsRoutes');

router.use('/travellers', travellersRoutes);

router.use('/locations', locationsRoutes);

router.use('/trips', tripsRoutes);

module.exports = router;