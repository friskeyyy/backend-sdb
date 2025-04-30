import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const KwhSDB = sequelize.define(
  "kwh_sdb",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATEONLY },
    v_r: { type: DataTypes.FLOAT },
    v_s: { type: DataTypes.FLOAT },
    v_t: { type: DataTypes.FLOAT },
    i_r: { type: DataTypes.FLOAT },
    i_s: { type: DataTypes.FLOAT },
    i_t: { type: DataTypes.FLOAT },
    kwh: { type: DataTypes.FLOAT },
    sdb_id: { type: DataTypes.INTEGER},
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    createdAt: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "kwh_sdb",
    timestamps: true,
  }
);

KwhSDB.associate = function(models) {
  KwhSDB.belongsTo(models.PanelSdb, {
    foreignKey: 'sdb_id', 
    as: 'panel', 
  });
};

export default KwhSDB;
