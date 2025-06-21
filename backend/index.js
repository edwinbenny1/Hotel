const express = require("express");
const cors = require("cors");
require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/users", authRoutes);

const roomRoutes = require("./routes/rooms");
app.use("/rooms", roomRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});