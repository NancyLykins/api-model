import { sequelize } from "../config/index.js";
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Conta = sequelize.define(
    "contas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        id_discord: {
            type: DataTypes.STRING(255)
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

export default Conta