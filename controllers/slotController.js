const slots = require("../data/slots");

const getAllSlots = (req, res) => {
    res.status(200).json(slots);
};

const getSlotById = (req, res) => {
    const id = Number(req.params.id);
    const slot = slots.find((slot) => slot.id === id);
    if (!slot) {
    return res.status(404).json({
        message: "Slot not found"
    });
}

return res.status(200).json(slot);
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