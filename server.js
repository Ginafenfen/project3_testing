require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const boardsRouter = require("./routes/boards");
app.use("/boards", usersRouter);

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
