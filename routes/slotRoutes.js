const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
    getAllSlots,
    getSlotById,
    createSlot,
    deleteSlot,
    updateSlot,
    bookSlot
} = require("../controllers/slotController");

const validateSlot = require("../middleware/validateSlot");

router.get("/", getAllSlots);

router.get("/:id", getSlotById);

router.post("/", protect, validateSlot, createSlot);

router.post("/:id/book", protect, bookSlot);

router.delete("/:id", protect, deleteSlot);

router.put("/:id", updateSlot);

module.exports = router;