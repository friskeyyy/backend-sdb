import KwhSdb from "../models/kwhsdb.js";


export const getAllKwh = async (req, res) => {
    try {
        const data = await KwhSdb.findAll({include: {all: true}});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getKwhById = async (req, res) => {
    try {
        const data = await KwhSdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createKwh = async (req, res) => {
    try {
        const newData = await KwhSdb.create(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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
