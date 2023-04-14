const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(1030, () => {
    console.log("Sever Start...");
});

app.get("/api", (req, res) => {
    return res.json({ message: "message" });
});