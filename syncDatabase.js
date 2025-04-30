import sequelize from "../models/db.js";
import PanelSDB from "../models/panelsdb.js";
import KwhSDB from "./models/kwhsdb.js";


const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log("Database berhasil disinkronisasi!");
  } catch (error) {
    console.error("Gagal sync database:", error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
