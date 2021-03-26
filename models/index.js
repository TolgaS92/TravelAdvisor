

const Traveller = require('./Traveller');

const Location = require('./Location');

const Trip = require('./Trip');



Traveller.belongsToMany(Location, 
    { 
        through:  {
            model: Traveller,
            unique: false,
        },
});

Location.belongsToMany(Traveller, 
    { 
        through:  {
            model: Traveller,
            unique: false,
        },
});


module.exports = { Location, Traveller, Trip};
