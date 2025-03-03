const express = require("express");
const connectDB = require("./Config/Db");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB()

// Middleware
app.use(express.json());
app.use(cors("http://localhost:3000"));

app.use("/books", require("./Routes/BookRoutes"))

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
