const express = require("express");
const router = express.Router();

const {
    getAllSlots,
    getSlotById,
    createSlot,
    deleteSlot,
    updateSlot
} = require("../controllers/slotController");

const validateSlot = require("../middleware/validateSlot");

router.get("/", getAllSlots);

router.get("/:id", getSlotById);

router.post("/", validateSlot, createSlot);

router.delete("/:id", deleteSlot);

router.put("/:id", updateSlot);

module.exports = router;