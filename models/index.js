import sequelize from '../config/db.js';
import KwhSdb from './kwhsdb.js';
import PermenitKwhSdb from './permenitKwhSdb.js';
import PanelSdb from './panelSdb.js';
import MasterDataMdb from "./masterdatamdb.js";
import AreaSDB from "./areasdb.js";

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');

        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

PanelSdb.hasMany(KwhSdb, { foreignKey: "sdb_id" });
KwhSdb.belongsTo(PanelSdb, { foreignKey: "sdb_id" });


export { sequelize, KwhSdb, PermenitKwhSdb, PanelSdb, MasterDataMdb, AreaSDB, syncDatabase };
