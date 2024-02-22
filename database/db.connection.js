import { Sequelize } from "sequelize";

export const connection = new Sequelize("E_learninig", "root", "", {
    host: "localhost",
    dialect:"mysql"
});


