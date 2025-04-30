import { Sequelize } from "sequelize";
import KwhSdb from "../models/kwhsdb.js";
import PanelSdb from "../models/panelsdb.js";

// ✅ Ambil semua data Kwh dengan relasi
export const getAllKwh = async (req, res) => {
    try {
        
            const data = await KwhSdb.findAll({
              attributes: [
                [Sequelize.fn('DATE', Sequelize.col('date')), 'date'],
                [Sequelize.fn('SUM', Sequelize.col('kwh')), 'total_kwh']
              ],
              group: [Sequelize.fn('DATE', Sequelize.col('date'))],
              order: [[Sequelize.fn('DATE', Sequelize.col('date')), 'ASC']]
            });
        
            res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

  
};
// ✅ Fungsi dummy untuk tonage (sementara ambil semua data juga)
export const getTonage = async (req, res) => {
    try {
        const data = await KwhSdb.findAll({ include: { all: true } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Ambil data berdasarkan ID
export const getKwhById = async (req, res) => {
    try {
        const data = await KwhSdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Tambah data baru
export const createKwh = async (req, res) => {
    try {
        const newData = await KwhSdb.create(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Update data berdasarkan ID
export const updateKwh = async (req, res) => {
    try {
        const data = await KwhSdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.update(req.body);
        res.json({ message: "Data berhasil diperbarui", data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Hapus data berdasarkan ID
export const deleteKwh = async (req, res) => {
    try {
        const data = await KwhSdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.destroy();
        res.json({ message: "Data berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ API baru: Grouping berdasarkan tanggal dan area
export const getGroupedKwhByDateAndArea = async (req, res) => {
    console.log("disini");
    
    try {
        const data = await KwhSdb.findAll({
            attributes: [
                "date",
                [Sequelize.col("panel_sdb.area"), "area"],
                [Sequelize.fn("SUM", Sequelize.col("kwh")), "total_kwh"]
            ],
            include: [
                {
                    model: PanelSdb,
                    attributes: [] 
                }
            ],
            group: ["date", "panel_sdb.area"],
            order: [["date", "ASC"]]
        });
        

        res.json(data);
    } catch (error) {
        console.error("Error grouping kWh:", error);
        res.status(500).json({ message: "Gagal group kWh", error });
    }
};
