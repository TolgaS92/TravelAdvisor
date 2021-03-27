

const Traveller = require('./Traveller');

const Location = require('./Location');

const Trip = require('./Trip');



Traveller.belongsToMany(Location, 
    {   
        foreignKey: 'traveller_id',
        through:  {
            model: Trip,
            unique: false,
        },
        as: "booked!"
});

Location.belongsToMany(Traveller, 
    {   
        foreignKey: 'location_id',
        through:  {
            model: Trip,
            unique: false,
        },
        as: "trips_await"
});


module.exports = { Location, Traveller, Trip};
