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

const createSlot = (req, res) => {
    const { date, time, duration } = req.body;

    const newSlot = {
        id: slots.length + 1,
        date,
        time,
        duration,
        isBooked: false
    };

    slots.push(newSlot);

    return res.status(201).json(newSlot);
};

const deleteSlot = (req, res) => {
    const id = Number(req.params.id);

    const index = slots.findIndex((slot) => slot.id === id);

    if (index === -1) {
    return res.status(404).json({
        message: "Slot not found"
    });
}
slots.splice(index, 1);

return res.status(200).json({
    message: "Slot deleted successfully"
});
};

module.exports = {
    getAllSlots,
    getSlotById,
    createSlot,
    deleteSlot
};