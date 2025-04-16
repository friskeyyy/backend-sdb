import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const MasterDataMdb = sequelize.define("master_data_mdb", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  panel: { type: DataTypes.STRING, allowNull: false },
  min_kwh: { type: DataTypes.FLOAT },
  max_kwh: { type: DataTypes.FLOAT },
  min_current: { type: DataTypes.FLOAT },
  max_current: { type: DataTypes.FLOAT },
  min_kva: { type: DataTypes.FLOAT },
  max_kva: { type: DataTypes.FLOAT },
  min_voltage: { type: DataTypes.FLOAT },
  max_voltage: { type: DataTypes.FLOAT },
  min_power_factor: { type: DataTypes.FLOAT },
  max_power_factor: { type: DataTypes.FLOAT },
  lokasi: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE },
}, {
  tableName: "master_data_mdb",
  timestamps: true,
});

export default MasterDataMdb;
