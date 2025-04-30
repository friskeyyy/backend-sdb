import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sdb", "admin", "admin123", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
