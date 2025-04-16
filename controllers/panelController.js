import PanelSDB from '../models/PanelSDB.js';
export const getAllPanel = async (req, res) => {
    try {
        const data = await PanelSDB.findAll();
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPanelById = async (req, res) => {
    try {
        const data = await PanelSDB.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPanel = async (req, res) => {
    try {
        const { panel, area, area_id, ip_address } = req.body;

        if (!area || !area_id) {
            return res.status(400).json({ message: "area dan area_id harus diisi" });
        }

        const newPanel = await PanelSDB.create({ panel, area, area_id, ip_address });

        res.status(201).json({ success: true, message: "Data berhasil disimpan!", data: newPanel });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updatePanel = async (req, res) => {
    try {
        const data = await PanelSDB.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.update(req.body);
        res.json({ message: "Data berhasil diperbarui", data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePanel = async (req, res) => {
    try {
        const data = await PanelSDB.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });

        await data.destroy();
        res.json({ message: "Data berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
