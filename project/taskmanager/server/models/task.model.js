const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
