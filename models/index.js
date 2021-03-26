

const Traveller = require('./Traveller');

const Location = require('./Location');

const Trip = require('./Trip');



Traveller.belongsToMany(Location, 
    { 
        through:  {
            model: Trip,
            unique: false,
        },
        as: "booked!"
});

Location.belongsToMany(Traveller, 
    { 
        through:  {
            model: Trip,
            unique: false,
        },
        as: "trips_await"
});


module.exports = { Location, Traveller, Trip};
