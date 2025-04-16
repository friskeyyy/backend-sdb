import AreaSDB from "../models/areasdb.js";

// 1️⃣ Get all area data
export const getAllArea = async (req, res) => {
  try {
    const area = await AreaSDB.findAll();
    res.json(area);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2️⃣ Get area by ID
export const getAreaById = async (req, res) => {
  try {
    const area = await AreaSDB.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: "Area not found" });
    res.json(area);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3️⃣ Create new area
export const createArea = async (req, res) => {
  try {
    const newData = await AreaSDB.js.create(req.body);
    res.status(201).json(newArea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4️⃣ Update area
export const updateArea = async (req, res) => {
  try {
    const area = await AreaSDB.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: "Area not found" });

    await area.update(req.body);
    res.json({ message: "Area updated", area });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 5️⃣ Delete area
export const deleteArea = async (req, res) => {
  try {
    const area = await AreaSDB.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: "Area not found" });

    await area.destroy();
    res.json({ message: "Area deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
