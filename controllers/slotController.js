const slots = require("../data/slots");

const getAllSlots = (req, res) => {
    res.status(200).json(slots);
};

module.exports = {
    getAllSlots
};