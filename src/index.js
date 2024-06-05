const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const studentRoutes = require("./routes/student");

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use('/api', studentRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API")
});

//mongodb conection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => consolge.error(error))

app.listen(port, () => console.log('Server listening on port:', port));

