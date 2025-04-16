import express from "express";
import { getAllMasterData, getMasterDataById, createMasterData, updateMasterData, deleteMasterData } from "../controllers/masterDataController.js";

const router = express.Router();

router.get("/", getAllMasterData);
router.get("/:id", getMasterDataById);
router.post("/", createMasterData);
router.put("/:id", updateMasterData);
router.delete("/:id", deleteMasterData);

export default router;
