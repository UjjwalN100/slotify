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

const updateSlot = async (req, res) => {
    try {
        const updatedSlot = await Slot.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedSlot) {
            return res.status(404).json({
                message: "Slot not found"
            });
        }

        return res.status(200).json(updatedSlot);
    } catch (error) {
        return res.status(404).json({
            message: "Slot not found"
        });
    }
};

const bookSlot = async (req, res) => {
    try {
        const slot = await Slot.findById(req.params.id);

        if (!slot) {
            return res.status(404).json({
                message: "Slot not found"
            });
        }

        if (slot.isBooked) {
            return res.status(400).json({
                message: "Slot is already booked"
            });
        }

        slot.isBooked = true;
        slot.bookedBy = req.user.userId;

        await slot.save();

        return res.status(200).json({
            message: "Slot booked successfully",
            slot
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to book slot"
        });
    }
};

module.exports = {
    getAllSlots,
    getSlotById,
    createSlot,
    deleteSlot,
    updateSlot,
    bookSlot
};