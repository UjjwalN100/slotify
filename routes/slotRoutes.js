const express = require("express");
const router = express.Router();

const { getAllSlots, getSlotById, createSlot, deleteSlot } = require("../controllers/slotController");

router.get("/", getAllSlots);

router.get("/:id", getSlotById);

router.post("/", createSlot);

router.delete("/:id", deleteSlot);

module.exports = router;