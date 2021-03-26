const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Traveller extends Model {}


Traveller.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        /* hooks: {
            beforeCreate: async (newTraveller) => {
                try {
                    newTraveller.password = await bcrypt.hash(newTraveller.password, 10);
                    return newTraveller;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            },
            beforeUpdate:  async (updatedTraveller) => {
                try {
                    updatedTraveller.password = await bcrypt.hash(updatedTraveller.password, 10);
                    return updatedTraveller;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            },
        }, */
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traveller',
    }
);

module.exports = Traveller;