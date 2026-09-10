const Slot = require("../models/slot");

const getAllSlots = async (req, res) => {
    const slots = await Slot.find();

    return res.status(200).json(slots);
};

const getSlotById = async (req, res) => {
    try {
        const slot = await Slot.findById(req.params.id);

        if (!slot) {
            return res.status(404).json({
                message: "Slot not found"
            });
        }

        return res.status(200).json(slot);
    } catch (error) {
        return res.status(404).json({
            message: "Slot not found"
        });
    }
};

const createSlot = async (req, res) => {
    try {
        const { date, time, duration } = req.body;

        const newSlot = await Slot.create({
            date,
            time,
            duration,
            isBooked: false
        });

        return res.status(201).json(newSlot);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create slot"
        });
    }
};

const deleteSlot = async (req, res) => {
    try {
        const deletedSlot = await Slot.findByIdAndDelete(req.params.id);

        if (!deletedSlot) {
            return res.status(404).json({
                message: "Slot not found"
            });
        }

        return res.status(200).json({
            message: "Slot deleted successfully"
        });
    } catch (error) {
        return res.status(404).json({
            message: "Slot not found"
        });
    }
};

module.exports = {
    getAllSlots,
    getSlotById,
    createSlot,
    deleteSlot
};