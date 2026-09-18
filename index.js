require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const logger = require("./middleware/logger");

app.use(logger);

const slotRoutes = require("./routes/slotRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/slots", slotRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Slotify API"
    });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(3000, () => {
            console.log("Slotify server is running on port 3000");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });