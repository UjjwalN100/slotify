const validateSlot = (req, res, next) => {
    const { date, time, duration } = req.body;

    if (!date || !time || !duration) {
        return res.status(400).json({
            message: "Date, time and duration are required"
        });
    }

    next();
};

module.exports = validateSlot;