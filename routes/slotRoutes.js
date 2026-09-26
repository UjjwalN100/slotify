const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
    getAllSlots,
    getSlotById,
    createSlot,
    deleteSlot,
    updateSlot,
    bookSlot,
    cancelBooking,
    getMyBookings
} = require("../controllers/slotController");

const validateSlot = require("../middleware/validateSlot");

router.get("/", getAllSlots);

router.get("/bookings/me", protect, getMyBookings);

router.get("/:id", getSlotById);

router.post("/", protect, validateSlot, createSlot);

router.post("/:id/book", protect, bookSlot);

router.post("/:id/cancel", protect, cancelBooking);

router.delete("/:id", protect, deleteSlot);

router.put("/:id", updateSlot);

module.exports = router;