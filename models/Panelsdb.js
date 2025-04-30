import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PanelSDB = sequelize.define(
  "panel_sdb",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mdb_id: { type: DataTypes.INTEGER, allowNull: true },
    panel: { type: DataTypes.STRING, allowNull: true },
    area: { type: DataTypes.STRING, allowNull: true },
    area_id: { type: DataTypes.INTEGER, allowNull: true },
    ip_address: { type: DataTypes.STRING },
    modbus_id: { type: DataTypes.INTEGER },
    min_v_r: { type: DataTypes.FLOAT },
    max_v_r: { type: DataTypes.FLOAT },
    min_v_s: { type: DataTypes.FLOAT },
    max_v_s: { type: DataTypes.FLOAT },
    min_v_t: { type: DataTypes.FLOAT },
    max_v_t: { type: DataTypes.FLOAT },
    min_kwh: { type: DataTypes.FLOAT },
    max_kwh: { type: DataTypes.FLOAT },
    updatedBy: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
  },
 {
    tableName: "panel_sdb",
    timestamps: true,
  }
);

PanelSDB.associate = function (models) {
  PanelSDB.hasMany(models.KwhSDB, {
    foreignKey: 'sdb_id', 
    as: 'kwh_data', 
  });
};

export default PanelSDB;
