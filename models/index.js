const Traveller = require('./Traveller');

const Location = require('./Location');

const Trips = require('./Trips');


Traveller.hasMany(Location, {
    foreignKey: "traveller_id",
});

Location.hasMany(Traveller, {
    foreignKey: 'location_id',
});

Trips.belongsTo(Traveller, {
    foreignKey: 'traveller_id',
});


module.exports = { Location, Traveller, Trips};