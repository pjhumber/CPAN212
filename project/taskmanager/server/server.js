const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/task.model");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.error("mongodb connection error:", err);
});

app.get("/tasks/:uid", async (req, res) => {
    const uid = req.params.uid;
    const tasks = await Task.find({ uid: uid });
    res.json(tasks);
});

app.post("/tasks", async (req, res) => {
    const { text, uid } = req.body;
    const task = new Task({ text: text, uid: uid });
    await task.save();
    res.json(task);
});

app.delete("/tasks/:uid/:id", async (req, res) => {
    const uid = req.params.uid;
    const id = req.params.id;
    await Task.deleteOne({ _id: id, uid: uid });
    res.json({ message: "Task deleted" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});