const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2014;

// Serve EVERYTHING from the project root
app.use(express.static(__dirname));

// Optional: default route (so "/" loads index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`2014Tube running at http://localhost:${PORT}`);
});