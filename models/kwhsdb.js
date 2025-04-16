import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const KwhSDB = sequelize.define(
  "kwh_sdb",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATE },
    v_r: { type: DataTypes.FLOAT },
    v_s: { type: DataTypes.FLOAT },
    v_t: { type: DataTypes.FLOAT },
    i_r: { type: DataTypes.FLOAT },
    i_s: { type: DataTypes.FLOAT },
    i_t: { type: DataTypes.FLOAT },
    kwh: { type: DataTypes.FLOAT },
    value: { type: DataTypes.FLOAT },
    power: { type: DataTypes.FLOAT },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "kwh_sdb",
    timestamps: true,
  }
);

export default KwhSDB;
