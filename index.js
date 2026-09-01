const express = require("express");

const app = express();

app.use(express.json());

const slotRoutes = require("./routes/slotRoutes");

app.use("/slots", slotRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Slotify API"
    });
});

app.listen(3000, () => {
    console.log("Slotify server is running on port 3000");
});