import MasterDataMdb from "../models/masterdatamdb.js";

export const getAllMasterData = async (req, res) => {
    try {
        const data = await MasterDataMdb.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMasterDataById = async (req, res) => {
    try {
        const data = await MasterDataMdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createMasterData = async (req, res) => {
    try {
        const newData = await MasterDataMdb.create(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMasterData = async (req, res) => {
    try {
        const data = await MasterDataMdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.update(req.body);
        res.json({ message: "Data berhasil diperbarui", data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMasterData = async (req, res) => {
    try {
        const data = await MasterDataMdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.destroy();
        res.json({ message: "Data berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
