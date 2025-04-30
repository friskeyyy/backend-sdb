import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PermenitKwhSdb = sequelize.define("permenit_kwh_sdb", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  sdb_id: { type: DataTypes.INTEGER, allowNull: false },
  v_r: { type: DataTypes.FLOAT },
  v_s: { type: DataTypes.FLOAT },
  v_t: { type: DataTypes.FLOAT },
  i_r: { type: DataTypes.FLOAT },
  i_s: { type: DataTypes.FLOAT },
  i_t: { type: DataTypes.FLOAT },
  kwh: { type: DataTypes.FLOAT },
  createdAt: { type: DataTypes.DATEONLY},
  updatedAt: { type: DataTypes.DATEONLY },
}, {
  tableName: "permenit_kwh_sdb",
  timestamps: true,
});

export default PermenitKwhSdb;
