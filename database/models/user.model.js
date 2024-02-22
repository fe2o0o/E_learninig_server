import { DataTypes } from "sequelize";
import { connection } from "../db.connection.js";

export const UserSchema = connection.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    e_mail: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
});

connection.sync();