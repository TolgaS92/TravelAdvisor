const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init (
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: false,
        },
        trip_budget: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        traveller_id: {
            type:DataTypes.INTEGER,
            references: {
                model: "traveller",
                key: "id",
                unique: false
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "location",
                key: "id",
                unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
    }
);

module.exports = Trip;