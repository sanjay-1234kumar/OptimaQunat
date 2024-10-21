// Import required modules
const express = require("express");
const path = require("path");

// Initialize express app
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 5000;

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, "../client/build")));

// API endpoint example (you can add more endpoints for your server logic)
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Serve React app for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

