const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get("/", async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;