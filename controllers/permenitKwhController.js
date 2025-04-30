import PermenitKwhSdb from "../models/permenitKwhSdb.js";

export const getAllPermenitKwh = async (req, res) => {
    try {
        const data = await PermenitKwhSdb.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPermenitKwhById = async (req, res) => {
    try {
        const data = await PermenitKwhSdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPermenitKwh = async (req, res) => {
    try {
        const newData = await PermenitKwhSdb.create(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePermenitKwh = async (req, res) => {
    try {
        const data = await PermenitKwhSdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.update(req.body);
        res.json({ message: "Data berhasil diperbarui", data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePermenitKwh = async (req, res) => {
    try {
        const data = await PermenitKwhSdb.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.destroy();
        res.json({ message: "Data berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
